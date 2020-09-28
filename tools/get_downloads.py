"""Get statistics associated with downloads of APBS-related software.

See https://docs.github.com/en/rest for more information.
"""
import argparse
import json
import logging
from time import sleep
from urllib.request import urlopen
from pandas import DataFrame


PAUSE = 5
GITHUB_API = "https://api.github.com"
ORG_NAME = "Electrostatics"
_LOGGER = logging.getLogger()
logging.basicConfig(level=logging.INFO)


def build_parser(repo_list):
    """Build an argument parser.

    :param repo_list:  list of repos to include as options
    :type repo_list:  list
    :returns:  argument parser
    :rtype:  argparse.ArgumentParser
    """
    parser = argparse.ArgumentParser(
        description=(
            "Get statistics associated with downloads of APBS-related "
            "software"
        ), formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )
    parser.add_argument(
        "--what", help="what statistic to report from repository",
        default="releases",
        choices=sorted(
            ["contributors", "tags", "releases"]
        )
    )
    parser.add_argument(
        "repo", help=(
            "Specific repo(s) for information"
        ),
        choices=repo_list, nargs="+"
    )
    return parser


def get_repo_list(org_name=ORG_NAME, api_url=GITHUB_API):
    """Get a list of repositories associated with the given organization.

    :param org_name:  GitHub organization name
    :type org_name:  str
    :param api_url:  GitHub API URL
    :type api_url:  str
    :returns:  list of repositories
    :rtype:  list(str)
    """
    url = "{api_url}/orgs/{org_name}/repos".format(
        org_name=org_name, api_url=api_url
    )
    _LOGGER.debug("Retrieving list of repos from %s...", url)
    url_file = urlopen(url)
    repo_json = json.load(url_file)
    repo_list = [repo["name"] for repo in repo_json]
    return repo_list


def get_contributors(repos, org_name=ORG_NAME, api_url=GITHUB_API):
    """Get contributor information associated with the given repos.

    https://docs.github.com/en/rest/reference/repos#list-repository-contributors

    :param repos:  list of repo names
    :type repos:  list(str)
    :param org_name:  GitHub organization name
    :type org_name:  str
    :param api_url:  GitHub API URL
    :type api_url:  str
    :returns:  contributors for each repository
    :rtype:  DataFrame
    """
    result_dict = {}
    for repo in repos:
        sleep(PAUSE)
        repo_dict = {}
        _LOGGER.info("Fetching contributors for %s repository", repo)
        url = "{api_url}/repos/{org_name}/{repo}/contributors".format(
            org_name=org_name, api_url=api_url, repo=repo
        )
        url_file = urlopen(url)
        contributor_list = json.load(url_file)
        for contributor in contributor_list:
            login = contributor["login"]
            contributions = contributor["contributions"]
            repo_dict[login] = contributions
        result_dict[repo] = repo_dict
    return DataFrame(result_dict)


def get_tags(repos, org_name=ORG_NAME, api_url=GITHUB_API):
    """Get tag information associated with the given repos.

    https://docs.github.com/en/rest/reference/repos#list-repository-tags

    :param repos:  list of repo names
    :type repos:  list(str)
    :param org_name:  GitHub organization name
    :type org_name:  str
    :param api_url:  GitHub API URL
    :type api_url:  str
    :returns:  dictionary with lists of tags for each repository
    :rtype:  dict(list)
    """
    result_dict = {}
    for repo in repos:
        sleep(PAUSE)
        _LOGGER.info("Fetching tags for %s repository", repo)
        url = "{api_url}/repos/{org_name}/{repo}/tags".format(
            org_name=org_name, api_url=api_url, repo=repo
        )
        url_file = urlopen(url)
        tag_list = [tag["name"] for tag in json.load(url_file)]
        result_dict[repo] = tag_list
    return result_dict


def get_releases(repos, org_name=ORG_NAME, api_url=GITHUB_API):
    """Get release information associated with the given repos.

    https://docs.github.com/en/rest/reference/repos#releases

    :param repos:  list of repo names
    :type repos:  list(str)
    :param org_name:  GitHub organization name
    :type org_name:  str
    :param api_url:  GitHub API URL
    :type api_url:  str
    :returns:  dictionary of dataframes with release data, indexed by repo
    :rtype:  dict(DataFrame)
    """
    result_dict = {}
    for repo in repos:
        sleep(PAUSE)
        _LOGGER.info("Fetching releases for %s repository", repo)
        url = "{api_url}/repos/{org_name}/{repo}/releases".format(
            org_name=org_name, api_url=api_url, repo=repo
        )
        url_file = urlopen(url)
        data = json.load(url_file)
        release_dict = {}
        for release in data:
            name = release["name"]
            release_dict[name] = {
                "date": release["published_at"],
                "assets": len(release["assets"])
            }
            downloads = 0
            for asset in release["assets"]:
                downloads += asset["download_count"]
            release_dict[name]["downloads"] = downloads
        df = DataFrame(release_dict).T
        try:
            df = df.sort_values("downloads", ascending=False)
        except KeyError:
            pass
        result_dict[repo] = df
    return result_dict


def main():
    """Main driver."""
    repo_list = get_repo_list()
    parser = build_parser(repo_list=repo_list)
    args = parser.parse_args()
    if args.what == "contributors":
        df = get_contributors(args.repo)
        print(df.to_string())
    elif args.what == "tags":
        tag_dict = get_tags(args.repo)
        print(json.dumps(tag_dict, indent=2))
    elif args.what == "releases":
        release_dict = get_releases(args.repo)
        for repo, df in release_dict.items():
            print("Release information for %s:" % repo)
            print(df.to_string())
    else:
        raise ValueError("Unknown option: '%s'" % args.what)


if __name__ == "__main__":
    main()