const languages = [
    ["k", "こ", "こn", "こん", "こんn", "こんに", "こんにt", "こんにち", "こんにちh", "こんにちは", "こんにちは！", "こんにちは！🇯🇵"], 
    ["П", "Пр", "При", "Прив", "Приве", "Привет", "Привет!", "Привет! 🇷🇺", ],
    ["S", "Sa", "Sal", "Salu", "Salut", "Salut ", "Salut !", "Salut ! 🇫🇷",],
    ["H", "He", "Hel", "Hell", "Hello", "Hello!", "Hello! 🇺🇸",],
    ["n", "ni", "你", "你h", "你ha", "你hao", "你好", "你好！", "你好！🇨🇳", "你好！🇨🇳🇹🇼",], 
    ["ا", "ال", "الس", "السل", "السلا", "السلام", "السلام ", "السلام ع",  "السلام عل",  "السلام علي",  "السلام عليك",  "السلام عليكم", "السلام عليكم!", "السلام عليكم! 🇸🇾", ],
    ["¡", "¡H", "¡Ho", "¡Hol", "¡Hola", "¡Hola!", "¡Hola! 🇨🇱",],
    ["ㅇ", "아", "안", "안ㄴ", "안녀", "안녕", "안녕ㅎ", "안녕하", "안녕하ㅅ", "안녕하세", "안녕하세ㅇ", "안녕하세요", "안녕하세요!", "안녕하세요! 🇰🇷",], 
    ["C", "Cz", "Cze", "Cześ", "Cześć", "Cześć!", "Cześć! 🇵🇱", ],
    ["X", "Xi", "Xin", "Xin ", "Xin c", "Xin ch", "Xin cha", "Xin chao", "Xin chào", "Xin chào!", "Xin chào! 🇻🇳",]
];
const rtl_languages = [5];

let cycleSpeed = 5000;
let typeSpeed = 100;

// function cycleText() {
//     textElement.textContent = languages[index];
//     index = (index + 1) % languages.length;
// }

function typeText(id, index) {
    const text = languages[index];
    const textElement = document.getElementById(id);
    let i = 0;
    // let typeSpeed = cycleSpeed / 2 / text.length
    // console.log(typeSpeed)

    if (rtl_languages.includes(index)) {
        textElement.style.direction = 'rtl';
        textElement.style.borderLeft = ".1em solid"
        textElement.style.borderRight = null
    } else {
        textElement.style.direction = 'ltr';
        textElement.style.borderRight = ".1em solid"
        textElement.style.borderLeft = null
    }

    function typeNextCharacter() {
        if (i <= text.length) {
            if (typeof text === "string") {
                textElement.textContent = text.slice(0, i);
            } else {
                textElement.textContent = text[i - 1];
            }
            i++;
            setTimeout(typeNextCharacter, typeSpeed); 
        }
    }

    typeNextCharacter();
}


let currentLanguageIndex = 0;

function cycleText() {
    typeText('hello', currentLanguageIndex);
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    setTimeout(cycleText, cycleSpeed); // Change text every 2 seconds (adjust as needed)
}

cycleText();


// setInterval(cycleText, 2000); // cycle every 2 seconds
