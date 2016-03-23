// files status: untracked, staging area, commit, modified

var gitTutorialModule{

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
}();