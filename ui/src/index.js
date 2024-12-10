const languageSelector = document.getElementById('locale')
const form = document.getElementById('infoForm')

const gameName = document.getElementById("gameName")
const gameImage = document.getElementById("gamePhoto")

const loadingDiv = document.getElementById("loading")
const gameDiv = document.getElementById("gameDiv")
const responseOverlay = document.getElementById("responseOverlay")
const errorDiv = document.getElementById("error")

let translations = {}
const genres = [
    {
        "text": "Any",
        "value": "",
        "tagKey": "any-genre"
    },
    {
        "text": "Adventure",
        "value": "adventure",
        "tagKey": "adventure"
    },
    {
        "text": "Arcade",
        "value": "arcade",
        "tagKey": "arcade"
    },
    {
        "text": "Brawler",
        "value": "hack-and-slash-beat-em-up",
        "tagKey": "brawler"
    },
    {
        "text": "Card &amp; Board Game",
        "value": "card-and-board-game",
        "tagKey": "card"
    },
    {
        "text": "Fighting",
        "value": "fighting",
        "tagKey": "fighting"
    },
    {
        "text": "Indie",
        "value": "indie",
        "tagKey": "indie"
    },
    {
        "text": "MOBA",
        "value": "moba",
        "tagKey": "moba"
    },
    {
        "text": "Music",
        "value": "music",
        "tagKey": "music"
    },
    {
        "text": "Pinball",
        "value": "pinball",
        "tagKey": "pinball"
    },
    {
        "text": "Platform",
        "value": "platform",
        "tagKey": "platform"
    },
    {
        "text": "Point-and-Click",
        "value": "point-and-click",
        "tagKey": "point-and-click"
    },
    {
        "text": "Puzzle",
        "value": "puzzle",
        "tagKey": "puzzle"
    },
    {
        "text": "Quiz/Trivia",
        "value": "quiz-trivia",
        "tagKey": "quiz-trivia"
    },
    {
        "text": "Racing",
        "value": "racing",
        "tagKey": "racing"
    },
    {
        "text": "Real Time Strategy",
        "value": "real-time-strategy-rts",
        "tagKey": "real-time-strategy"
    },
    {
        "text": "RPG",
        "value": "role-playing-rpg",
        "tagKey": "rpg"
    },
    {
        "text": "Shooter",
        "value": "shooter",
        "tagKey": "shooter"
    },
    {
        "text": "Simulator",
        "value": "simulator",
        "tagKey": "simulator"
    },
    {
        "text": "Sport",
        "value": "sport",
        "tagKey": "sport"
    },
    {
        "text": "Strategy",
        "value": "strategy",
        "tagKey": "strategy"
    },
    {
        "text": "Tactical",
        "value": "tactical",
        "tagKey": "tactical"
    },
    {
        "text": "Turn Based Strategy",
        "value": "turn-based-strategy-tbs",
        "tagKey": "turn-based"
    },
    {
        "text": "Visual Novel",
        "value": "visual-novel",
        "tagKey": "visual-novel"
    },
]
const categories = [
    {
        "text": "Any",
        "value": "",
        "tagKey": "any-category-platform"
    },
    {
        "text": "Main Game",
        "value": "main-game"
    },
    {
        "text": "DLC",
        "value": "dlc_addon"
    },
    {
        "text": "Expansion",
        "value": "expansion"
    },
    {
        "text": "Bundle",
        "value": "bundle"
    },
    {
        "text": "Standalone Expansion",
        "value": "standalone-expansion"
    },
    {
        "text": "Mod",
        "value": "mod"
    },
    {
        "text": "Episode",
        "value": "episode"
    },
    {
        "text": "Season",
        "value": "season"
    },
    {
        "text": "Remake",
        "value": "remake"
    },
    {
        "text": "Remaster",
        "value": "remaster"
    },
    {
        "text": "Expanded Game",
        "value": "expanded-game"
    },
    {
        "text": "Port",
        "value": "port"
    },
    {
        "text": "Fork",
        "value": "fork"
    },
    {
        "text": "Pack / Addon",
        "value": "pack"
    },
    {
        "text": "Update",
        "value": "game_update"
    }
]
const platforms = [
    {
        "text": "Any",
        "value": "",
        "tagKey": "any-category-platform"
    },
    {
        "text": "Windows PC",
        "value": "win"
    },
    {
        "text": "Mac",
        "value": "mac"
    },
    {
        "text": "Nintendo Switch",
        "value": "nintendo-switch"
    },
    {
        "text": "PlayStation 4",
        "value": "ps4--1"
    },
    {
        "text": "Linux",
        "value": "linux"
    },
    {
        "text": "iOS",
        "value": "ios"
    },
    {
        "text": "Xbox One",
        "value": "xboxone"
    },
    {
        "text": "Android",
        "value": "android"
    },
    {
        "text": "Web browser",
        "value": "browser"
    },
    {
        "text": "PlayStation 5",
        "value": "playstation-5"
    },
    {
        "text": "Xbox Series",
        "value": "xbox-series-x"
    },
    {
        "text": "PlayStation 3",
        "value": "ps3"
    },
    {
        "text": "PlayStation 2",
        "value": "ps2"
    },
    {
        "text": "Arcade",
        "value": "arcade"
    },
    {
        "text": "Xbox 360",
        "value": "xbox360"
    },
    {
        "text": "PlayStation",
        "value": "ps"
    },
    {
        "text": "PC DOS",
        "value": "dos"
    },
    {
        "text": "Wii",
        "value": "wii"
    },
    {
        "text": "Nintendo DS",
        "value": "nds"
    },
    {
        "text": "Commodore C64/128",
        "value": "c64"
    },
    {
        "text": "PlayStation Portable",
        "value": "psp"
    },
    {
        "text": "PlayStation Vita",
        "value": "psvita"
    },
    {
        "text": "Game Boy Advance",
        "value": "gba"
    },
    {
        "text": "Amiga",
        "value": "amiga"
    },
    {
        "text": "Nintendo 3DS",
        "value": "3ds"
    },
    {
        "text": "ZX Spectrum",
        "value": "zxs"
    },
    {
        "text": "SNES",
        "value": "snes--1"
    },
    {
        "text": "Wii U",
        "value": "wiiu"
    },
    {
        "text": "Sega Mega Drive/Genesis",
        "value": "smd"
    },
    {
        "text": "NES",
        "value": "nes"
    },
    {
        "text": "Amstrad CPC",
        "value": "acpc"
    },
    {
        "text": "Super Famicom",
        "value": "sfam"
    },
    {
        "text": "Family Computer (FAMICOM)",
        "value": "famicom"
    },
    {
        "text": "Atari ST/STE",
        "value": "atari-st"
    },
    {
        "text": "Game Boy",
        "value": "gb"
    },
    {
        "text": "Game Boy Color",
        "value": "gbc"
    },
    {
        "text": "Mobile",
        "value": "mobile"
    },
    {
        "text": "Xbox",
        "value": "xbox"
    },
    {
        "text": "Handheld Electronic LCD",
        "value": "handheld-electronic-lcd"
    },
    {
        "text": "Nintendo 64",
        "value": "n64"
    },
    {
        "text": "Sega Saturn",
        "value": "saturn"
    },
    {
        "text": "Apple II",
        "value": "appleii"
    },
    {
        "text": "SteamVR",
        "value": "steamvr"
    },
    {
        "text": "MSX",
        "value": "msx"
    },
    {
        "text": "Nintendo GameCube",
        "value": "ngc"
    },
    {
        "text": "Atari 8-bit",
        "value": "atari8bit"
    },
    {
        "text": "Atari 2600",
        "value": "atari2600"
    },
    {
        "text": "Dreamcast",
        "value": "dc"
    },
    {
        "text": "PC-98",
        "value": "pc-98"
    },
    {
        "text": "Oculus Quest 2",
        "value": "oculus-quest-2"
    },
    {
        "text": "Nintendo DSi",
        "value": "nintendo-dsi"
    },
    {
        "text": "PlayStation VR",
        "value": "playstation-vr"
    },
    {
        "text": "Sega Master System",
        "value": "sms"
    },
    {
        "text": "Playdate",
        "value": "playdate"
    },
    {
        "text": "Windows Phone",
        "value": "winphone"
    },
    {
        "text": "Google Stadia",
        "value": "google-stadia"
    },
    {
        "text": "Sega Game Gear",
        "value": "gamegear"
    },
    {
        "text": "TurboGrafx-16/PC Engine",
        "value": "turbografx16--1"
    },
    {
        "text": "PC-8801",
        "value": "pc-8801"
    },
    {
        "text": "Plug & Play",
        "value": "plug-and-play"
    },
    {
        "text": "Oculus Quest",
        "value": "oculus-quest"
    },
    {
        "text": "BBC Microcomputer System",
        "value": "bbcmicro"
    },
    {
        "text": "Satellaview",
        "value": "satellaview"
    },
    {
        "text": "3DO Interactive Multiplayer",
        "value": "3do"
    },
    {
        "text": "Oculus Rift",
        "value": "oculus-rift"
    },
    {
        "text": "Playstation VR2",
        "value": "playstation-vr2"
    },
    {
        "text": "Turbografx-16/PC Engine CD",
        "value": "turbografx-16-slash-pc-engine-cd"
    },
    {
        "text": "Sharp X68000",
        "value": "sharp-x68000"
    },
    {
        "text": "Oculus VR",
        "value": "oculus-vr"
    },
    {
        "text": "Sega CD",
        "value": "segacd"
    },
    {
        "text": "FM Towns",
        "value": "fm-towns"
    },
    {
        "text": "Family Computer Disk System",
        "value": "fds"
    },
    {
        "text": "ColecoVision",
        "value": "colecovision"
    },
    {
        "text": "FM-7",
        "value": "fm-7"
    },
    {
        "text": "Neo Geo MVS",
        "value": "neogeomvs"
    },
    {
        "text": "Neo Geo AES",
        "value": "neogeoaes"
    },
    {
        "text": "Sharp X1",
        "value": "x1"
    },
    {
        "text": "Commodore VIC-20",
        "value": "vic-20"
    },
    {
        "text": "TRS-80",
        "value": "trs-80"
    },
    {
        "text": "Intellivision",
        "value": "intellivision"
    },
    {
        "text": "Commodore 16",
        "value": "c16"
    },
    {
        "text": "Amiga CD32",
        "value": "amiga-cd32"
    },
    {
        "text": "Meta Quest 3",
        "value": "meta-quest-3"
    },
    {
        "text": "MSX2",
        "value": "msx2"
    },
    {
        "text": "Acorn Electron",
        "value": "acorn-electron"
    },
    {
        "text": "Philips CD-i",
        "value": "philips-cd-i"
    },
    {
        "text": "Apple IIGS",
        "value": "apple-iigs"
    },
    {
        "text": "Atari 5200",
        "value": "atari5200"
    },
    {
        "text": "Neo Geo CD",
        "value": "neo-geo-cd"
    },
    {
        "text": "Windows Mixed Reality",
        "value": "windows-mixed-reality"
    },
    {
        "text": "WonderSwan",
        "value": "wonderswan"
    },
    {
        "text": "Ouya",
        "value": "ouya"
    },
    {
        "text": "WonderSwan Color",
        "value": "wonderswan-color"
    },
    {
        "text": "SG-1000",
        "value": "sg1000"
    },
    {
        "text": "Atari Lynx",
        "value": "lynx"
    },
    {
        "text": "Philips Videopac G7000",
        "value": "philips-videopac-g7000"
    },
    {
        "text": "Neo Geo Pocket Color",
        "value": "neo-geo-pocket-color"
    },
    {
        "text": "TRS-80 Color Computer",
        "value": "trs-80-color-computer"
    },
    {
        "text": "Texas Instruments TI-99",
        "value": "ti-99"
    },
    {
        "text": "Atari Jaguar",
        "value": "jaguar"
    },
    {
        "text": "BlackBerry OS",
        "value": "blackberry"
    },
    {
        "text": "New Nintendo 3DS",
        "value": "new-nintendo-3ds"
    },
    {
        "text": "Commodore Plus/4",
        "value": "c-plus-4"
    },
    {
        "text": "DVD Player",
        "value": "dvd-player"
    },
    {
        "text": "Vectrex",
        "value": "vectrex"
    },
    {
        "text": "Atari 7800",
        "value": "atari7800"
    },
    {
        "text": "Dragon 32/64",
        "value": "dragon-32-slash-64"
    },
    {
        "text": "Watara/QuickShot Supervision",
        "value": "watara-slash-quickshot-supervision"
    },
    {
        "text": "N-Gage",
        "value": "ngage"
    },
    {
        "text": "NEC PC-6000 Series",
        "value": "nec-pc-6000-series"
    },
    {
        "text": "Leapster",
        "value": "leapster"
    },
    {
        "text": "Evercade",
        "value": "evercade"
    },
    {
        "text": "Amazon Fire TV",
        "value": "amazon-fire-tv"
    },
    {
        "text": "Game & Watch",
        "value": "game-and-watch"
    },
    {
        "text": "PC-FX",
        "value": "pc-fx"
    },
    {
        "text": "Acorn Archimedes",
        "value": "acorn-archimedes"
    },
    {
        "text": "Virtual Boy",
        "value": "virtualboy"
    },
    {
        "text": "Sinclair ZX81",
        "value": "sinclair-zx81"
    },
    {
        "text": "Zeebo",
        "value": "zeebo"
    },
    {
        "text": "Sega 32X",
        "value": "sega32"
    },
    {
        "text": "Arduboy",
        "value": "arduboy"
    },
    {
        "text": "Windows Mobile",
        "value": "windows-mobile"
    },
    {
        "text": "Leapster Explorer/LeadPad Explorer",
        "value": "leapster-explorer-slash-leadpad-explorer"
    },
    {
        "text": "Apple Pippin",
        "value": "apple-pippin"
    },
    {
        "text": "Nintendo 64DD",
        "value": "nintendo-64dd"
    },
    {
        "text": "Sega Pico",
        "value": "sega-pico"
    },
    {
        "text": "Commodore PET",
        "value": "cpet"
    },
    {
        "text": "V.Smile",
        "value": "vsmile"
    },
    {
        "text": "Arcadia 2001",
        "value": "arcadia-2001"
    },
    {
        "text": "Bally Astrocade",
        "value": "astrocade"
    },
    {
        "text": "Amstrad PCW",
        "value": "amstrad-pcw"
    },
    {
        "text": "Odyssey",
        "value": "odyssey--1"
    },
    {
        "text": "Fairchild Channel F",
        "value": "fairchild-channel-f"
    },
    {
        "text": "Sharp MZ-2200",
        "value": "sharp-mz-2200"
    },
    {
        "text": "Gear VR",
        "value": "gear-vr"
    }
]

addEventListener("DOMContentLoaded", () => {
    const genreSelect = document.getElementById("genre")
    const categorySelect = document.getElementById("gameCategory")
    const platformSelect = document.getElementById("platform")

    insertOptions(genreSelect, genres)
    insertOptions(categorySelect, categories)
    insertOptions(platformSelect, platforms)

    setLanguage()
})

languageSelector.addEventListener("change", () => {
    setLanguage()
})

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const username = event.target[0].value
    const genre = event.target[1].value
    const category = event.target[2].value
    const platform = event.target[3].value

    const url = generateUrl(username.toLowerCase(), genre, category, platform);

    loadingDiv.classList.remove("hidden")
    responseOverlay.classList.remove("hidden")

    const game = await fetch(url, {method: "GET"})
        .then(response => response.json())
        .catch(error => console.log(error))

    if (game.content.code === "ERROR" || game.content.code === "NO_GAME") {
        document.getElementById("errorMessage").textContent = translations["errors"][game.content.code]

        loadingDiv.classList.add("hidden")

        errorDiv.classList.remove("hidden")

        return
    }

    gameName.textContent = game.content.name

    gameImage.setAttribute("src", game.content.imageSrc)

    loadingDiv.classList.add("hidden")
    gameDiv.classList.remove("hidden")
})

async function setLanguage() {
    const language = languageSelector.value

    translations = await fetch("./locales/lang.json").then(response => response.json()).then(data => {
        return data[language]
    })

    const pageTags = document.querySelectorAll("[tag-key]")

    pageTags.forEach(tag => {
        if (tag.localName === "input") {
            tag.placeholder = translations[tag.getAttribute("tag-key")]
            return
        }

        if (tag.localName === "option") {
            tag.innerHTML = translations["genres"][tag.getAttribute("tag-key")]
            return
        }

        tag.innerHTML = translations[tag.getAttribute("tag-key")]
    })
}

function hideResponse() {
    cleanOverlay()

    document.getElementById("gameName").textContent = ""
    document.getElementById("gamePhoto").setAttribute("src", "")
}

function generateUrl(username, genre, category, platform) {
    let url = new URL(`http://localhost:5000/randomGame/${username}?`)

    if (genre.length !== 0) {
        url.searchParams.append("genre", genre)
    }

    if (category.length !== 0) {
        url.searchParams.append("categories", category)
    }

    if (platform.length !== 0) {
        url.searchParams.append("platform", platform)
    }

    return url.href
}

function cleanOverlay() {
    responseOverlay.classList.add("hidden")
    loadingDiv.classList.add("hidden")
    gameDiv.classList.add("hidden")
    errorDiv.classList.add("hidden")
}

function insertOptions(select, options) {
    options.forEach(g => {
        let node = document.createElement("option")

        node.textContent = g.text
        node.value = g.value

        if (g.tagKey != null) {
            node.setAttribute("tag-key", g.tagKey)
        }

        select.appendChild(node)
    })
}