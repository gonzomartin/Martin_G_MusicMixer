(() => {
  // Audio function
  const theAudio = document.querySelector('audio'),
        trackButtons = document.querySelectorAll('.audioref'),
        playButton = document.getElementById('playButton'),
        pauseButton = document.getElementById('pauseButton'),
        rewindButton = document.getElementById('rewindButton');


  function loadTrack() {
    theAudio.src = `audio/${this.dataset.trackref}.wav`;
    theAudio.load();
    playTrack();
    }

    function playTrack() { theAudio.play(); }
    function pauseTrack() { theAudio.pause(); }

    function rewindTrack() {
    theAudio.currentTime = 0;

    playTrack();
    }

    trackButtons.forEach(button => button.addEventListener('click', loadTrack));

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    rewindButton.addEventListener('click', rewindTrack);

    // Drag and drop function
    const instruments = document.querySelectorAll(".instrumentsIcons *"),
  				dropZones = document.querySelectorAll(".dropZone");

          function startDrag(event) {
        		event.dataTransfer.setData("draggedElement", event.target.id);
        	}

        	function draggedOver(event) {
        		event.preventDefault();
        	}

        	function handleDrop(event) {
        		event.preventDefault();
        		if (this.childElementCount > 0) { return; }
        		let currentEl = event.dataTransfer.getData("draggedElement");
        		console.log(`dropped this element:`, currentEl);
        		this.appendChild(document.querySelector(`#${currentEl}`));
        	}

        	instruments.forEach(piece => piece.addEventListener("dragstart", startDrag));
        	dropZones.forEach(zone => {
        		zone.addEventListener("dragover", draggedOver);
        		zone.addEventListener("drop", handleDrop);
        	});

})()
