# Git Commands and Basic Terminal Use:

*note HEAD is a pointer to the branch you are currently in **

## Make new Directory:
```
mkdir git
```

## Remove from file
```
rm-rf <file name> or rm <file name>
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

## Commit log of the repository
```
git log
```

## Check status of my working copy
```
git status
```

## Difference in the file
```
git diff
```

## Add, commit, and push your changes:
```
git add
git commit -m "add message"
git push

or 

git push origin master
```


## Come out of directory
```
cd .. 
```

## Goes back into the previous directory
```
cd -
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

##
```
cp -r
```

## Merging a file from one branch to another
```
git rebase <name of file>
```


## Create git
```
git config --global user.name "FIRST_NAME" "LAST_NAME"
```


## 
```
git congif --global user.email "MY_NAME@example.com
```


## View all commits done
```
git log

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

## 
```
git log --oneline
```


## Check the deleted file
```
git log -- <file_name.example>
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
```

## or 
```

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
