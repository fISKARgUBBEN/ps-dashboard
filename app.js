const login = 'robin.malmquist@tickster.com'
const password = "fzZeymQSWOgfOvbuqmnhP2Mr18lCWVWmPmUvN8Vp";
// ('https://tickster.zendesk.com/api/v2/channels/voice/stats/agents_activity'

fetch("https://tickster.zendesk.com/api/v2/channels/voice/stats/agents_activity", {
  headers: new Headers({
    "Authorization": `Basic ${login}:${password})}`
  }),
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();

  console.log(response);
})

var agentInfo = {
    name: 'Robin Malmquist',
    calls: 14,
    callTime: 34
};

// var newAgent = `<div class="agent-card agent-card-on-call"><div class="agent-photo">    <i class="fas fa-user user"></i></div><div class="agent-info">    <h4>${agentInfo.name}</h4>    <strong>${agentInfo.calls}</strong> samtal - <strong>${agentInfo.callTime}</strong> min</div></div>`;

// const addSys = document.getElementById('sys');
// const addTs = document.getElementById('ts');
// const addShowtic = document.getElementById('showtic');

// addSys.addEventListener('click', addSysAgent);
// addTs.addEventListener('click', addTsAgent);
// addShowtic.addEventListener('click', addShowticAgent);

// function addSysAgent() {
//     document.getElementById('sys-agents').innerHTML += newAgent;
// }

// function addTsAgent() {
//     document.getElementById('ts-agents').innerHTML += newAgent;
// }

// function addShowticAgent() {
//     document.getElementById('showtic-agents').innerHTML += newAgent;
// }