
// Функція "Діалог з користувачем"
function dialogWithUser() {
	let attempts = 0;
	let answer;

	do {
		answer = prompt("Яка столиця Франції?");
		attempts++;
	} while (answer.toLowerCase() !== "париж" && attempts < 3);

	if (answer.toLowerCase() === "париж") {
		alert("Правильно!");
	} else {
		alert("Спроби закінчилися. Правильна відповідь - Париж.");
	}
}

// Функція про розробника
function developerInfo(lastName, firstName, position = "Студент") {
	alert(`Розробник: ${lastName} ${firstName}, посада: ${position}`);
}

// Функція порівняння рядків
function compareFromInputs() {
	const str1 = document.getElementById("str1").value.trim();
	const str2 = document.getElementById("str2").value.trim();

	if (!str1 || !str2) {
		alert("Будь ласка, введіть обидва рядки для порівняння.");
	} else if (str1.length > str2.length) {
		alert(`Більший рядок: ${str1}`);
	} else if (str2.length > str1.length) {
		alert(`Більший рядок: ${str2}`);
	} else {
		alert("Рядки однакові.");
	}
}

// Функція перенаправлення на корисний туристичний сайт після 5 секунд
function redirectToTouristSite(delayInSeconds = 5) {
	setTimeout(() => {
		location.href = "https://www.lonelyplanet.com/";
	}, delayInSeconds * 1000);
}

// Функція для відкриття вікна з тестовим параграфом
function openTestWrite() {
	const newWin = window.open('', '', 'width=400,height=300');
	newWin.document.write("<p style='color: red;'>Це тестовий параграф, доданий через document.write</p>");
}

document.addEventListener("DOMContentLoaded", function () {
	//Зміна фону на 30 секунд
	document.body.style.backgroundColor = "#fef6e4";
	setTimeout(() => {
		document.body.style.backgroundColor = "";
	}, 30000);

	// Використання querySelectorAll
	const highlights = document.querySelectorAll(".highlight");
	highlights.forEach(el => {
		el.style.backgroundColor = "lightgreen";
		el.style.padding = "2px 4px";
		el.style.borderRadius = "4px";
	});

	// Використання innerHTML
	const mainHeader = document.querySelector("h1");
	mainHeader.innerHTML += " 🌐"; // додаємо символ в кінець

	// Використання outerHTML
	const firstParagraph = document.querySelector(".text");
	firstParagraph.outerHTML = `<p class="text">🌟 ${firstParagraph.textContent} 🌟</p>`;

	// Використання textContent
	const aboutHeading = document.querySelector("a[href='#about']");
	aboutHeading.textContent = "Хто ми такі?";

	// Використання nodeValue
	const highlightSpan = document.querySelector(".highlight").firstChild;
	if (highlightSpan.nodeType === Node.TEXT_NODE) {
		highlightSpan.nodeValue = "надихають";
	}

	// createElement, createTextNode
	const newSection = document.createElement("section");
	const sectionTitle = document.createElement("h2");
	sectionTitle.textContent = "Нове відкриття";
	const sectionText = document.createElement("p");
	const textNode = document.createTextNode("Досліджуйте нові куточки планети щодня!");
	sectionText.appendChild(textNode);
	newSection.append(sectionTitle, sectionText);

	// append
	document.querySelector(".main").append(newSection);

	// prepend
	const navList = document.querySelector(".nav ul");
	const newNavItem = document.createElement("li");
	newNavItem.innerHTML = `<a href="#">Новинка</a>`;
	navList.prepend(newNavItem);

	// after
	const aboutParagraph = document.querySelector("#about").nextElementSibling;
	const tip = document.createElement("p");
	tip.textContent = "Порада: не забудьте взяти з собою позитивний настрій!";
	aboutParagraph.after(tip);

	// replaceWith
	const secondHeading = document.querySelector("h2");
	const replacement = document.createElement("h2");
	replacement.textContent = "Навіщо подорожувати світом?";
	secondHeading.replaceWith(replacement);

	// remove
	const linkToLonelyPlanet = document.querySelector('a[href*="lonelyplanet"]');
	if (linkToLonelyPlanet) {
		linkToLonelyPlanet.remove();
	}
});