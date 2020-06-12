const testElements = document.getElementsByClassName("container");
const container = document.getElementsByClassName("container");

const data = {
  terran: [
    {
      name: "advisor",
      count: 14,
      speak: [
        "Not enough minerals",
        "Insufficient Vespene gas",
        "Additional Supply Depots required",
        "Landing sequence interrupted",
        "Unacceptable landing zone",
        "Not enough energy",
        "Base is under attack",
        "Your forces are under attack",
        "Research complete",
        "Add-on complete",
        "Nuclear launch detected",
        "Abandoning auxiliary structure",
        "Upgrade complete",
        "Nuclear missile ready",
      ],
      mean: [
        "광물이 부족합니다",
        "베스핀 가스가 부족합니다",
        "보급고가 부족합니다",
        "지금은 착륙할 수 없습니다",
        "그곳에는 착륙할 수 없습니다",
        "에너지가 부족합니다",
        "기지가 공격받고 있습니다",
        "아군이 공격받고 있습니다",
        "연구 완료",
        "부속건물 완성",
        "핵 공격이 감지되었습니다",
        "보조 구조물을 버리고 떠납니다",
        "업그레이드 완료",
        "핵미사일이 준비되었습니다",
      ],
    },

    {
      name: "civilian",
      speak: [
        "I wanna be all I can be",
        "I'll tell you what, I think I'll join up!! ",
        "I'm a little claustrophobic though",
        "Hope they don't put me in any tight spaces",
        "Ah, what the hell. I need that college money",
        "Hey, how'd I get here",
        "Hey there",
        "What's up",
        "Howdy",
        "I'm goin",
        "No sweat",
        "Yep",
        "All right",
        "Sure thing",
      ],
      mean: [
        "전 훌륭한 사람이 될 거에요",
        "그래서 군대에 가려구요",
        "근데 제가 살짝 폐쇄공포증이 있거든요",
        "좁은 데만 가두지 않았으면 좋겠네요",
        "어쩔 수 없죠. 전 대학 등록금이 필요하니",
        "엇, 여긴 어디지",
        "안녕하세요",
        "어떻게들 지내세요",
        "뭐죠",
        "반갑습니다",
        "갑니다",
        "옙",
        "알았어요",
        "껌이지",
      ],
    },
  ],
};

function init() {
  for (var i = 0; i < testElements.length; i++) {
    testElements[i].addEventListener("click", (e) => {
      var tribe;
      var unit;

      if (e.target.parentNode.className === "overlay")
        tribe = e.target.parentNode.parentNode;
      else tribe = e.target.parentNode;

      unit = tribe.getAttribute("data-name").toLowerCase();
      tribe = tribe
        .getAttribute("data-group")
        .replace("[", "")
        .replace("]", "")
        .toLowerCase();

      console.log(tribe);
      console.log(unit);

      var audio = new Audio();
      const src = "Sound/" + tribe + "/" + unit + "/00.wav";

      audio.src = src;
      audio.play();
      console.log(src);
    });
    testElements[i].addEventListener("mouseenter", () => {
      var audio = new Audio();
      const src = "Sound/glue/mouseover.wav";
      audio.src = src;
      audio.play();
    });
    testElements[i].addEventListener("dblclick", (e) => {});
  }
}

setTimeout(init, 0);
//setTimeout(A, 0);

console.log(data["terran"]);
