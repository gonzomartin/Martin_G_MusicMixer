(() => {
  // Audio function
  const theAudio = document.querySelector('audio'),
        trackButtons = document.querySelectorAll('.audioref'),
        playSampleButton = document.getElementById('playSampleButton'),
        pauseSampleButton = document.getElementById('pauseSampleButton'),
        rewindSampleButton = document.getElementById('rewindSampleButton'),
        playButton = document.getElementById('playButton'),
        pauseButton = document.getElementById('pauseButton'),
        rewindButton = document.getElementById('rewindButton');


  function loadSampleTrack() {
    theAudio.src = `audio/${this.dataset.trackref}.wav`;
    theAudio.load();
    playSampleTrack();
    }

    function playSampleTrack() { theAudio.play(); }
    function pauseSampleTrack() { theAudio.pause(); }

    function rewindSampleTrack() {
    theAudio.currentTime = 0;

    playSampleTrack();
    }

    function playTrack() { selectTrack.play(); }
    function pauseTrack() { selectTrack.pause(); }

    function rewindTrack() {
    selectTrack.currentTime = 0;

    playTrack();
    }

    trackButtons.forEach(button => button.addEventListener('click', loadSampleTrack));

    playSampleButton.addEventListener('click', playSampleTrack);
    pauseSampleButton.addEventListener('click', pauseSampleTrack);
    rewindSampleButton.addEventListener('click', rewindSampleTrack);
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
            let droppedEl = document.querySelector(`#${currentEl}`);
        		this.appendChild(droppedEl);
            console.log(droppedEl.dataset.trackref);
            console.log(event.target.id);
            let selectTrack = document.querySelector('audio#track' + event.target.id);
            selectTrack.src = `audio/${droppedEl.dataset.trackref}.wav`;
            selectTrack.load();
            selectTrack.play();
        	}

        	instruments.forEach(piece => piece.addEventListener("dragstart", startDrag));
        	dropZones.forEach(zone => {
        		zone.addEventListener("dragover", draggedOver);
        		zone.addEventListener("drop", handleDrop);
        	});

})()
