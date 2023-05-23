---
title: Step-by-step Guide to Start Writing on Here
date: "2023-01-01T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/step-by-step-guide-to-start-writing-on-here"
category: "Meta"
tags:
description: "Quick intro to add a post to the journal"
---

Check out the [example paper](http://george.chemmala.com/BrownMathDUG_Research/posts/vectors-over-trivially-regular-hyper-banach-euler-factors)

- [Getting Repository Access](#gain-access-to-the-repository-on-github:)
- [Adding an Article](#add-your-article:)
- [Helpful Git Vocab](#git-terms)

## Gain access to the repository on GitHub:
*If you have not already done so, create a GitHub account*
- **Request access:** If you don't have access to the repository, you will need to request access (likely through email) from the repository owner or an existing collaborator. 

- **Accept invitation:** If the repository owner or collaborator grants you access to the repository, you will receive an email invitation from GitHub. Follow the instructions in the email to accept the invitation and gain access to the repository.


## Add your article:
The following instructions are written with VSCode in mind and contains shortcuts on VSCode, but the steps can be replicated on other IDEs like WebStorm, Vim, etc.

- **Install Git (Skip if on MacOS):** If you haven't already, you need to install Git on your computer. You can download and install it from the official Git website: https://git-scm.com/downloads

- **Clone the repository:** Open VSCode (or your IDE of choice) and move to the "Welcome" tab. Click on the "Clone Repository" button. Enter the URL of the GitHub repository you want to contribute to and choose a folder on your computer to store the repository files.

    * Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows) to open the Command Palette.
    * Type "Git: Clone" and press Enter.
    * Enter the repository URL and press Enter.
    * Choose the location to save the repository and press Enter.

- **Open the repository in VSCode:** Once you have cloned the repository, VSCode will open it automatically. If not, navigate to the folder where you cloned the repository using the "Explorer" view and double-click on the folder to open it in VSCode.

- **Create a new markdown file:** To create a new markdown file, right-click on the folder where you want to store the file in the "Explorer" view and select "New File". Name the file with the .md extension to indicate that it's a markdown file. (Alternatively you can create a starter markdown file from an existing LaTeX file)

    * Cmd+N (Mac) or Ctrl+N (Windows) to create a new file.
    * Type in the file name with the .md extension and press Enter.
    * Begin editing the file.

- **Edit the markdown file:** Double-click on the markdown file to open it in VSCode's text editor. Write or paste the content of the markdown file in the editor. You can use VSCode's built-in markdown preview feature to check how the file will look once it's rendered. To preview the file, right-click on the editor and select "Open Preview" or press Ctrl+Shift+V on Windows or Cmd+Shift+V on Mac.

- **Stage the file:** Once you have made changes to the markdown file, save the file (Ctrl+S on Windows or Cmd+S on Mac). Then, go to the "Source Control" panel in the sidebar by clicking on the icon that looks like a branch with a circle around it. You should see the changes you made to the file in the "Changes" section. Click the "+" button next to the file name to stage the file.

    * Cmd+S (Mac) or Ctrl+S (Windows) to save changes to the file.
    * Cmd+Shift+G (Mac) or Ctrl+Shift+G (Windows) to open the Source Control panel.
    * Click on the "+" icon next to the markdown file to stage changes.

- **Commit the file:** After staging the file, add a commit message that describes the changes you made to the file. Enter the commit message in the text box at the top of the "Source Control" panel and click the checkmark icon to commit the changes.

    * Type in a commit message and press Cmd+Enter (Mac) or Ctrl+Enter (Windows) to commit changes.

- **Push the changes to the remote repository:** To push your changes to the remote repository, click on the "..." button next to the branch name in the "Source Control" panel and select "Push". This will upload your changes to the repository on GitHub.

    * Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows) to open the Command Palette.
    * Type "Git: Push" and press Enter to push changes to the remote repository.

## Git Terms
1. **Git:** A version control system that allows developers to track changes to their code over time.
2. **Repository:** A Git repository is a collection of files and folders, along with the version history of those files.
3. **Clone:** The act of creating a copy of a Git repository on your local machine.
4. **Commit:** A commit is a record of changes made to a repository. Each commit has a unique identifier, a timestamp, and a commit message that describes the changes made.
5. **Branch:** A branch is a copy of the repository that allows you to work on changes without affecting the original codebase. You can create a branch to experiment with new features or to fix bugs, for example.
6. **Merge:** The act of combining changes from one branch into another branch.
7. **Pull:** The act of fetching changes from a remote repository and merging them into your local repository.
8. **Push:** The act of uploading changes from your local repository to a remote repository.
9. **Remote:** A remote is a version of the repository that is stored on a server, such as GitHub or Bitbucket.
10. **Origin:** The default name for the remote repository that a local repository was cloned from.
11. **Fork:** A fork is a copy of a repository that is created on your GitHub account. This allows you to experiment with changes to the codebase without affecting the original repository.
12. **Pull request:** A pull request is a request to merge changes from one branch or fork into another branch or repository. The owner of the target branch or repository can review the changes and decide whether to accept or reject the pull request.
