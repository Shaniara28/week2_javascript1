let bio = () => {
    const biodata = {
        name : "Shania Risky Agustin",
        age : 22,
        hobbies : ["Menyanyi", "Ngoding", "Menonton"],
        isMaried : false,
        schoolList : [
        {
            name : "SMAN 9 Bekasi",
            yearIn : 2015,
            yearOut : 2018,
            major : "IPA"
        },
        {
            name : "SMPN 11 Bekasi",
            yearIn : 2012,
            yearOut : 2015,
            major : null
        },
        {
            name : "SDN Aren Jaya 5",
            yearIn : 2006,
            yearOut : 2012,
            major : null
        },
        ],
        skills : [
        {
            skillName : "Web Development",
            level : "beginner"
        },
        {
            skillName : "Mobile Development",
            level : "beginner"
        },
        ],
        interestInCoding : true
    } 
    return biodata;
}

console.log(bio());