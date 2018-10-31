// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        friendName: "Mitch",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Mitch_McConnell_official_portrait_112th_Congress.jpg",
        scores: [
            "1",
            "4",
            "5",
            "3",
            "2",
            "3",
            "4",
            "3",
            "4",
            "4"
        ]
    },
    {
        friendName: "Carl",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbfvRvbRWTov_H6ix05NTLwvM625W72hwvKj5aAq8EtGrBm6o",
        scores: [
            "1",
            "4",
            "4",
            "2",
            "2",
            "2",
            "3",
            "4",
            "4",
            "5"
        ]
    },
    {
        friendName: "Bruce",
        photo: "https://static1.squarespace.com/static/54257189e4b0ac0d5fca1566/t/5936ac612e69cf2cca879234/1496755324490/Bruce+Sherman+-+Photo+%283_4+Profile%29.jpg",
        scores: [
            "1",
            "2",
            "5",
            "3",
            "3",
            "3",
            "4",
            "4",
            "4",
            "4"
        ]
    },
    {
        friendName: "Reggie",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Reggie_Sanders_by_Gage_Skidmore.jpg/220px-Reggie_Sanders_by_Gage_Skidmore.jpg",
        scores: [
            "1",
            "2",
            "3",
            "4",
            "4",
            "4",
            "3",
            "4",
            "4",
            "5"
        ]
    }
    ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;