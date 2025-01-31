// الكلمات المفتاحية لكل صفحة
const keywords = {
    sections: [
        "قسم باطنه", 
        "قلب", 
        "أطفال", 
        "جراحة",
        "القلب",
        "الانف والاذن والحنجرة",
        "الانف",
        "الاذن",
        "جراحة عامه",
        "نساء وتوليد",
        "امراض نساء وتوليد",
        "العيون الرمد",
        "امراض العيون والرمد",
        "جراحه العظام",
        "الامراض الجلدية",
        "الجلديه",
        "جراحة الاوعيه دمويه",
        "الاوعية دمويه",
        "جراحة الاورام",
        "الاورام",
        "الاسنان",
        "جراحه مسالك بولية",
        "المسالك البولية",
        "الروماتيزم والمناعة والمفاصل",
        "المناعه والمفاصل",
    ],
    doctors: [
        "دكتور أحمد", 
        "دكتورة ليلى", 
        "دكتور خالد", 
        "دكتورة ندى",
        "محمد",
        "احمد مصطفي",
        "محمد الاتربي",
        "احمد عبداللة",
        "محمد علي الغانم",
        "هاني قليني",
        "محمد العسال",
        "هشام لاشين",
        "محمود الفولي",
        "هشام لاشين",
        "ابراهيم عبد المحسن",
        "احمد سفينه",
        "عادل فتحي",
        "احمد المعتصم",
        "محمد عمر",
        "هشام جودة",
        "سامية رشيدي",
        "عمر ناجي",
        "محمد العطار",
        "عمر ناجي",
        "علاء حجاج",
        "هشام بسيوني",
        "عبدالله عامر الفواز",
        "زياد سمير",
        "علاء الدين حسين",
        "عمرو حاملي",
        "حسين النجار",
        "عمرو حلمي",
        "محمد متولي صديق",
        "حسام النجار",
        "عبد القوي الغازي",
        
    ]
};

function calculateSimilarity(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,    
                dp[i][j - 1] + 1,    
                dp[i - 1][j - 1] + cost 
            );
        }
    }
    return dp[len1][len2];
}

function cleanInput(input) {
    return input.replace(/قسم\s?/g, "").replace(/دكتور(ة)?\s?/g, "").trim();
}

function findClosestMatch(input, list) {
    let closestMatch = "";
    let minDistance = Infinity;

    list.forEach(keyword => {
        const cleanKeyword = cleanInput(keyword);
        const distance = calculateSimilarity(input, cleanKeyword);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = keyword;
        }
    });

    return minDistance <= 2 ? closestMatch : null;
}

function handleSearch() {
    const searchInput = cleanInput(document.getElementById("searchInput").value.trim());
    let foundPage = "";
    const sectionMatch = findClosestMatch(searchInput, keywords.sections);
    const doctorMatch = findClosestMatch(searchInput, keywords.doctors);

    if (sectionMatch) {
        foundPage = "sections";
    } 
    else if (doctorMatch) {
        foundPage = "doctors";
    }

    if (foundPage === "sections") {
        window.location.href = "Departments.html";
    } else if (foundPage === "doctors") {
        window.location.href = "ForDoctors.html";
    } else {
        const suggestions = [
            ...keywords.sections,
            ...keywords.doctors
        ].filter(keyword => calculateSimilarity(searchInput, cleanInput(keyword)) <= 2);

        if (suggestions.length > 0) {
            alert(`لم يتم العثور على نتائج دقيقة. هل كنت تقصد: ${suggestions.join(", ")}؟`);
        } else {
            alert("لم يتم العثور على نتائج مناسبة! جرب كتابة كلمة مختلفة.");
        }
    }
}
document.getElementById("myButton").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});


