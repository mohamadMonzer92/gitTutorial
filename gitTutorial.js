// files status: untracked, staging area, commit, modified

var gitTutorialModule{
	------------------ level 1 -------------------------
	var gitConfiguration = {
		$git config --global user.name "Mohamad Monzer"
		$git config --global user.email mohamad.monzer@outlook.com
		$git config --global color.ui true
	}

	// initialize an empty git repository
	var initEmptyRepo = {
		$git init
	}

	// to add files to staging area
	var addFileToStagingArea = {
		$git add fileName // add specific file
		$git add --all 	  // add all new or modified files to the staging area
		$git add <list of files>
		$git add *.txt
		$git add *.txt
		// $git add docs/*.txt	// Add all txt files in docs directory
		$git add docs/			// Add all fukes in docs directory
		$git add *.txt 			// Add all txt files in the project
	}

	var commit = {
		$git commit -m "commit message" // use present tense
	}

	// get History list
	var gitTimeLineHistory = {
		$git log
	}

	// show unstaged differences since last commit
	var showUnstagedDifferences = {
		$git diff 			// get differences
		$git diff --staged 	// get staged differences
	}

	------------------ level 2 -------------------------
	// unstage Tip
	// those commands does not remove modifications!! they just unstage files
	var removeFileFromStagingArea = {
		$git rm --cached fileName	// not from the tutorial
		$git reset HEAD fileName	// unstage, where the HEAD refers to the last commit on the current brach
	}

	// to checkout a file and remove all changes since last commit
	var removeChanges = {
		$git checkout -- fileName
	}

	// if we try to commit a file without staging it, we will have an error "Changes not staged for commit"
	// this is a shortcut to add and commit a file
	var commitAndAddShortcut = {
		$git commit -a -m "commit message"	// Add changes from all tracked files
		// Note that: this command Doesn't add new (untracked) files
	}

	


	// ----------- don't do these after you push --------------------------//
	// whoops, we forgot something on that commit
	// we want to undo the last commit, put changes into staging
	var undoCommit{
		$git reset --soft HEAD^	// Move to commit before "HEAD", put changes into staging
		$git reset --hard HEAD^ // Move to commit before "HEAD", remove all changes
	}

	//maybe we forget to add a file, and we want to add it to the last commit
	var ammendToTheLastCommit = {
		$git commit --ammend -m "optional commit message to override our previous" 
	}
	// ----------- END don't do these after you push --------------------------//




			-------- push to gitHub -----
	create a gitHub repository
	$git remote add origin https://github.com/mohamadMonzer92/gitTutorial.git
	//   ------ New remote
	//					   --------------------------------------------------  repository address
	//				------ origin is a canonical name for this remote (it can be any other name)

	To push the the repository
	$git push -u origin master
	//			 ------ remote repository name
	//					------ local branch to push

	To pull changes down from the remote
	$git pull

	To add new remotes
	$git remote add <name> <address>

	To remove remotes
	$git remote rm <name>

	To push to remote
	$git push -u <name> <branch>
	//		  -- to remember last remote used, so in the next push we don't have to enter the name and the branch

	------------------ level 3 -------------------------
	To clone a repository
	// clone will do the following:
		1. Download the entier repository into a new git-read directory
		2. create a remote called origin and point it to the clone URL
			(we can check the list of remotes using:
				$git remote -v
			)
		3. check out initial branch
	$git clone <address> <optional localFolderName>


	Create a branch
	// when we want to work on a feature that will take some time, it is good to create a branch
	$git branch branchName		// create a branch, but until now we are on the master branch
	$git checkout branchName 	// move the the branchName
		a shortcut to create a branch and to move to it
		$git checkout -b branchName

	$git branch -d branchName	// Delete branch

}();