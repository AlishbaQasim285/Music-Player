// class MusicPlayer {
//   constructor() {
//     this.audio = new Audio();
//     this.playlist = [];
//     this.currentIndex = 0;
//     this.isPlaying = false;
//     this.init();
//   }

//   init() {
//     this.playlistEl = document.getElementById("playlist");
//     this.fileInput = document.getElementById("file-input");
//     this.seekBar = document.getElementById("seek-bar");
//     this.seekFill = this.seekBar.querySelector(".seek-bar-fill");
//     this.currentTimeEl = document.querySelector(".current-time");
//     this.durationEl = document.querySelector(".duration");
//     this.playPauseBtn = document.querySelector(".play-pause");
//     this.prevBtn = document.querySelector(".prev");
//     this.nextBtn = document.querySelector(".next");
//     this.trackNameEl = document.querySelector(".track-name");

//     this.fileInput.addEventListener("change", (e) => this.addFiles(e));
//     this.playPauseBtn.addEventListener("click", () => this.togglePlayPause());
//     this.prevBtn.addEventListener("click", () => this.prev());
//     this.nextBtn.addEventListener("click", () => this.next());
//     this.seekBar.addEventListener("click", (e) => this.seek(e));
//     this.audio.addEventListener("timeupdate", () => this.updateTime());
//     this.audio.addEventListener("ended", () => this.next());

//     document.querySelector(".toggle-theme").addEventListener("click", () => {
//       document.body.classList.toggle("light-mode");
//     });

//     // Preload songs
//     const preload = [
//       {
//         name: "Apna Bana Le  Bhediya  Varun Dhawan Kriti Sanon SachinJigar Arijit Singh Amitabh Bhattacharya.mp3",
//         url: "./y2mate.com - Apna Bana Le  Bhediya  Varun Dhawan Kriti Sanon SachinJigar Arijit Singh Amitabh Bhattacharya.mp3",
//       },
//       {
//         name: "Ae Dil Hai Mushkil Title Track Full Video  Ranbir Anushka AishwaryaArijitPritam.mp3",
//         url: "./y2mate.com - Ae Dil Hai Mushkil Title Track Full Video  Ranbir Anushka AishwaryaArijitPritam.mp3",
//       },
//       {
//         name: "Afghan Jalebi Ya Baba FULL VIDEO Song  Phantom  Saif Ali Khan Katrina Kaif Pritam Asrar TSeries.mp3",
//         url: "./y2mate.com - Afghan Jalebi Ya Baba FULL VIDEO Song  Phantom  Saif Ali Khan Katrina Kaif Pritam Asrar TSeries.mp3",
//       },
//       {
//         name: "Bole Chudiyan Full Video  K3GAmitabh Shah Rukh Kajol Kareena HrithikUdit Narayan.mp3",
//         url: "./y2mate.com - Bole Chudiyan Full Video  K3GAmitabh Shah Rukh Kajol Kareena HrithikUdit Narayan.mp3",
//       },
//       {
//         name: "Gaddi Pichhe Naa  Khan Bhaini  Shipra Goyal  Official Punjabi Song 2021.mp3",
//         url: "./y2mate.com - Gaddi Pichhe Naa  Khan Bhaini  Shipra Goyal  Official Punjabi Song 2021.mp3",
//       },
//       {
//         name: "Ishq Sufiyana  Slowed  Reverb",
//         url: "./y2mate.com - Ishq Sufiyana  Slowed  Reverb .mp3",
//       },
//       {
//         name: "Nashe Si Chadh Gayi  Full Song  Befikre Ranveer Singh Vaani Kapoor Arijit Singh VishalShekhar.mp3",
//         url: "./y2mate.com - Nashe Si Chadh Gayi  Full Song  Befikre Ranveer Singh Vaani Kapoor Arijit Singh VishalShekhar.mp3",
//       },
//       {
//         name: "Sun Saathiya Full Video  Disneys ABCD 2  Varun Dhawan  Shraddha Kapoor  Sachin Jigar  Priya S.mp3",
//         url: "./y2mate.com - Sun Saathiya Full Video  Disneys ABCD 2  Varun Dhawan  Shraddha Kapoor  Sachin Jigar  Priya S.mp3",
//       },
//       {
//         name: "Ve Haaniyaan Slowed  Reverb  Ve Haniya Ve Dil Janiya  Danny  SR Lofi",
//         url: "./y2mate.com - Ve Haaniyaan Slowed  Reverb  Ve Haniya Ve Dil Janiya  Danny  SR Lofi.mp3",
//       },
//       {
//         name: "Waareya 𝙨𝙡𝙤𝙬𝙚𝙙 𝙩𝙤 𝙥𝙚𝙧𝙛𝙚𝙘𝙩𝙞𝙤𝙣  𝙧𝙚𝙫𝙚𝙧𝙗.mp3",
//         url: "./y2mate.com - Waareya 𝙨𝙡𝙤𝙬𝙚𝙙 𝙩𝙤 𝙥𝙚𝙧𝙛𝙚𝙘𝙩𝙞𝙤𝙣  𝙧𝙚𝙫𝙚𝙧𝙗.mp3",
//       },
//     ];
//     preload.forEach((song) => this.playlist.push(song));
//     this.renderPlaylist();
//     this.loadSong(0);
//   }

//   addFiles(e) {
//     const files = Array.from(e.target.files);
//     files.forEach((file) => {
//       this.playlist.push({ name: file.name, url: URL.createObjectURL(file) });
//     });
//     this.renderPlaylist();
//   }

//   renderPlaylist() {
//     this.playlistEl.innerHTML = "";
//     this.playlist.forEach((track, i) => {
//       const item = document.createElement("div");
//       item.className = `song-item${i === this.currentIndex ? " active" : ""}`;
//       item.textContent = track.name;
//       item.onclick = () => this.loadSong(i);
//       this.playlistEl.appendChild(item);
//     });
//   }

//   loadSong(index) {
//     if (index < 0 || index >= this.playlist.length) return;
//     this.currentIndex = index;
//     this.audio.src = this.playlist[index].url;
//     this.trackNameEl.textContent = this.playlist[index].name;
//     this.renderPlaylist();
//     if (this.isPlaying) this.audio.play();
//   }

//   togglePlayPause() {
//     if (!this.playlist.length) return;
//     if (this.isPlaying) {
//       this.audio.pause();
//       this.playPauseBtn.textContent = "▶";
//     } else {
//       this.audio.play();
//       this.playPauseBtn.textContent = "⏸";
//     }
//     this.isPlaying = !this.isPlaying;
//   }

//   prev() {
//     if (this.currentIndex > 0) this.loadSong(this.currentIndex - 1);
//   }

//   next() {
//     if (this.currentIndex < this.playlist.length - 1)
//       this.loadSong(this.currentIndex + 1);
//   }

//   seek(e) {
//     const rect = this.seekBar.getBoundingClientRect();
//     const percent = (e.clientX - rect.left) / rect.width;
//     this.audio.currentTime = percent * this.audio.duration;
//   }

//   updateTime() {
//     const current = this.audio.currentTime;
//     const duration = this.audio.duration;
//     const percent = (current / duration) * 100;
//     this.seekFill.style.width = `${percent}%`;
//     this.currentTimeEl.textContent = this.formatTime(current);
//     this.durationEl.textContent = this.formatTime(duration);
//   }

//   formatTime(sec) {
//     const mins = Math.floor(sec / 60);
//     const secs = Math.floor(sec % 60);
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   }
// }

// new MusicPlayer();

class MusicPlayer {
  constructor() {
    this.audio = new Audio();
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.init();
  }

  init() {
    this.playlistEl = document.getElementById("playlist");
    this.fileInput = document.getElementById("file-input");
    this.seekBar = document.getElementById("seek-bar");
    this.seekFill = this.seekBar.querySelector(".seek-bar-fill");
    this.currentTimeEl = document.querySelector(".current-time");
    this.durationEl = document.querySelector(".duration");
    this.playPauseBtn = document.querySelector(".play-pause");
    this.prevBtn = document.querySelector(".prev");
    this.nextBtn = document.querySelector(".next");
    this.trackNameEl = document.querySelector(".track-name");

    // Event listeners
    this.fileInput.addEventListener("change", (e) => this.addFiles(e));
    document.querySelector(".add-song").addEventListener("click", () => {
      this.fileInput.click(); // Show file picker on button click
    });
    this.playPauseBtn.addEventListener("click", () => this.togglePlayPause());
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());
    this.seekBar.addEventListener("click", (e) => this.seek(e));
    this.audio.addEventListener("timeupdate", () => this.updateTime());
    this.audio.addEventListener("ended", () => this.next());

    document.querySelector(".toggle-theme").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });

    // Preload songs
    const preload = [
      {
        name: "Apna Bana Le - Bhediya",
        url: "./y2mate.com - Apna Bana Le  Bhediya  Varun Dhawan Kriti Sanon SachinJigar Arijit Singh Amitabh Bhattacharya.mp3",
      },
      {
        name: "Ae Dil Hai Mushkil",
        url: "./y2mate.com - Ae Dil Hai Mushkil Title Track Full Video  Ranbir Anushka AishwaryaArijitPritam.mp3",
      },
      {
        name: "Afghan Jalebi",
        url: "./y2mate.com - Afghan Jalebi Ya Baba FULL VIDEO Song  Phantom  Saif Ali Khan Katrina Kaif Pritam Asrar TSeries.mp3",
      },
      {
        name: "Bole Chudiyan",
        url: "./y2mate.com - Bole Chudiyan Full Video  K3GAmitabh Shah Rukh Kajol Kareena HrithikUdit Narayan.mp3",
      },
      {
        name: "Gaddi Pichhe Naa",
        url: "./y2mate.com - Gaddi Pichhe Naa  Khan Bhaini  Shipra Goyal  Official Punjabi Song 2021.mp3",
      },
      {
        name: "Ishq Sufiyana (Slowed Reverb)",
        url: "./y2mate.com - Ishq Sufiyana  Slowed  Reverb .mp3",
      },
      {
        name: "Nashe Si Chadh Gayi",
        url: "./y2mate.com - Nashe Si Chadh Gayi  Full Song  Befikre Ranveer Singh Vaani Kapoor Arijit Singh VishalShekhar.mp3",
      },
      {
        name: "Sun Saathiya",
        url: "./y2mate.com - Sun Saathiya Full Video  Disneys ABCD 2  Varun Dhawan  Shraddha Kapoor  Sachin Jigar  Priya S.mp3",
      },
      {
        name: "Ve Haaniyaan (Lofi)",
        url: "./y2mate.com - Ve Haaniyaan Slowed  Reverb  Ve Haniya Ve Dil Janiya  Danny  SR Lofi.mp3",
      },
      {
        name: "Waareya (Slowed)",
        url: "./y2mate.com - Waareya 𝙨𝙡𝙤𝙬𝙚𝙙 𝙩𝙤 𝙥𝙚𝙧𝙛𝙚𝙘𝙩𝙞𝙤𝙣  𝙧𝙚𝙫𝙚𝙧𝙗.mp3",
      },
    ];
    preload.forEach((song) => this.playlist.push(song));
    this.renderPlaylist();
    this.loadSong(0);
  }

  addFiles(e) {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      this.playlist.push({ name: file.name, url: URL.createObjectURL(file) });
    });
    this.renderPlaylist();
  }

  renderPlaylist() {
    this.playlistEl.innerHTML = "";
    this.playlist.forEach((track, i) => {
      const item = document.createElement("div");
      item.className = `song-item${i === this.currentIndex ? " active" : ""}`;
      item.textContent = track.name;
      item.onclick = () => this.loadSong(i);
      this.playlistEl.appendChild(item);
    });
  }

  loadSong(index) {
    if (index < 0 || index >= this.playlist.length) return;
    this.currentIndex = index;
    this.audio.src = this.playlist[index].url;
    this.trackNameEl.textContent = this.playlist[index].name;
    this.renderPlaylist();
    if (this.isPlaying) this.audio.play();
  }

  togglePlayPause() {
    if (!this.playlist.length) return;
    if (this.isPlaying) {
      this.audio.pause();
      this.playPauseBtn.textContent = "▶";
    } else {
      this.audio.play();
      this.playPauseBtn.textContent = "⏸";
    }
    this.isPlaying = !this.isPlaying;
  }

  prev() {
    if (this.currentIndex > 0) this.loadSong(this.currentIndex - 1);
  }

  next() {
    if (this.currentIndex < this.playlist.length - 1)
      this.loadSong(this.currentIndex + 1);
  }

  seek(e) {
    const rect = this.seekBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = percent * this.audio.duration;
  }

  updateTime() {
    const current = this.audio.currentTime;
    const duration = this.audio.duration;
    const percent = (current / duration) * 100;
    this.seekFill.style.width = `${percent}%`;
    this.currentTimeEl.textContent = this.formatTime(current);
    this.durationEl.textContent = this.formatTime(duration);
  }

  formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }
}

new MusicPlayer();
