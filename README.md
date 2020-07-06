# Git Commands and Basic Terminal Use:

*note HEAD is a pointer to the branch you are currently in **

## Configure git
```
git config --global user.name "FIRST_NAME" "LAST_NAME"

git congif --global user.email "MY_NAME@example.com

git config --list
```

## Make new Directory:
```
mkdir git
```

## Initalize the git repository
```
git init
```

## Get Help
```

git --help

```

## Create file
```
touch <filename>
```

## Remove file
```
rm-rf <file name> or rm <file name>
```

## Come out of directory
```
cd .. 
```

## Goes back into the previous directory
```
cd -
```

## Deletes Folder
```
-r
```

## Deletes with Force(deletes a portected file)
```
-f 
```

## Change Directory
```
cd <git> or <file name>
```

## Check all commits
```
git log
```

## Most recent commit entry
```
git log -n1
```

## Check status of my working copy
```
git status
```

## See changes in the file (difference)
```
git diff
```

## Add, commit, and push your changes:
```
git add .(add all files) or git add -A(add one file)
git commit -m "add message" or git commit <filename> -m "message"

or 
git commit -a -m "add message"

git push or git push origin master
```

## Process of pull
```
git stash
git branch
git checkout <name of branch>
git checkout new-branch
git pull
```

## Apply stashed files
```
git stash apply
```

## Merge file to avoid conflict
```
git merge <name of file>
```

## Edit a file
```
nano.<filename>
```

## Make an exact opposite commit of our last commit, undoing it, while leaving all history intact. 
```
git reset --hard HEAD^
```

## Merging a file from one branch to another
```
git rebase <name of file>
```

## View all commits done
```
git log
```

# Gives the lists of commits without details
```
git log --oneline
```

## Check the deleted file
```
git log -- <file_name.example>
```

## Ignore certain files that should be not commited to the repository
```
.gitnore
```

## View all documents in the currrent directory
```
ls

ls-al
```

## Diguard all changes and stages done after files was commited
```
git reset --hard HEAD~1
```

## To add the deleted file back onto the branch
```
git checkout <name of the master branch> -- <filename.example>
```

## Show origin of the branch
```
git remote

git remote show origin
```

## Create a branch
```
git branch <name of branch>
```
## Switch and work on that current branch
```
git checkout <name of branch>

ex: git checkout develop

or

git checkout -b <name of branch>
```

## Push to origin when working with more than one branch
```
git push -u origin dev
```

## view all branches and on what branch you are working on
```
git branch
```

## View remote tracking and local branches
```
git branch -a
```

## Make changes without editing the commit
```
git commit --amend --no-edit
```

## Edit a commit message, to add files accidentally left out of the commit, or to remove files that were added by mistake
```
git commit --amend
```

## Delete a branch
```
git branch -d <branchname>
```

## Rename branch
```
git branch -m <oldbranchname newbranchname>
```

## Visualilze whats happening in git
```
git log --oneline --graph --decorate --all
```


## Create an empty file with that filename subdirectory and add the contents of the subdirectory to the index
```
touch <filename>/.git-keep
```

## Resort  file using git
```
git reset HEAD <filename>
git checkout -- <filename>
```
