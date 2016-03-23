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

	var removeFileFromStagingArea = {
		$git rm --cached fileName
	}

	var commit = {
		$git commit -m "commit message" // use present tense
	}

	var gitTimeLineHistory = {
		$git log
	}
}();