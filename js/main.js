const services = {
  tarot: {
    kicker: "Para perguntas, escolhas e travessias",
    title: "Leitura de Tarot",
    copy:
      "Uma consulta para explorar temas específicos, organizar perguntas e observar possibilidades sem transformar a leitura em garantia de futuro.",
    fit: "clareza sobre decisões, relações, limites e novos ciclos.",
    flow: "escuta inicial, tiragem, interpretação e fechamento com reflexões.",
  },
  astrologia: {
    kicker: "Para compreender padrões e ciclos",
    title: "Mapa astral e revolução solar",
    copy:
      "Uma leitura simbólica para observar tendências, potências, desafios e movimentos de um ciclo pessoal.",
    fit: "quem deseja se conhecer melhor ou olhar um novo período com mais estrutura.",
    flow: "coleta de dados, leitura do mapa, conversa guiada e recomendações de integração.",
  },
  hoodoo: {
    kicker: "Para intenção, proteção e prática espiritual",
    title: "Hoodoo",
    copy:
      "Práticas espirituais conduzidas com contexto, responsabilidade e alinhamento com o objetivo apresentado.",
    fit: "pessoas que buscam práticas de proteção, prosperidade simbólica ou autocuidado ritual.",
    flow: "triagem do objetivo, explicação de limites, preparo e orientação da prática adequada.",
  },
  radiestesia: {
    kicker: "Para leitura energética dentro da proposta da marca",
    title: "Radiestesia",
    copy:
      "Uma modalidade para investigar percepções energéticas e apoiar reflexões sobre ambientes, escolhas ou processos.",
    fit: "quem deseja uma leitura complementar, sempre respeitando limites e contexto.",
    flow: "definição do tema, leitura radiestésica e conversa sobre os pontos percebidos.",
  },
  uterina: {
    kicker: "Para autocuidado, corpo e simbolismo",
    title: "Limpeza uterina",
    copy:
      "Uma prática que deve ser comunicada com cuidado, escopo claro e linguagem responsável sobre corpo, energia e autocuidado.",
    fit: "mulheres interessadas em rituais de reconexão, desde que a modalidade esteja disponível.",
    flow: "alinhamento prévio, explicação da prática, preparo e integração após o atendimento.",
  },
  divorcio: {
    kicker: "Para encerramento de vínculos simbólicos",
    title: "Divórcio energético",
    copy:
      "Uma experiência ritualística para marcar encerramentos, reorganizar intenções e apoiar processos de desapego simbólico.",
    fit: "quem atravessa fim de ciclo, ruptura ou necessidade de reposicionar limites.",
    flow: "escuta do contexto, definição de intenção, prática conduzida e orientações posteriores.",
  },
  anual: {
    kicker: "Para olhar um ciclo mais longo",
    title: "Leitura anual",
    copy:
      "Uma leitura ampliada para organizar temas, tendências e reflexões de um período, sem prometer controle sobre acontecimentos.",
    fit: "quem deseja preparar o ano ou uma nova fase com visão mais panorâmica.",
    flow: "mapeamento dos temas, leitura estruturada por períodos e fechamento com prioridades.",
  },
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  revealObserver.observe(element);
});

const tabs = document.querySelectorAll(".service-tab");
const serviceKicker = document.querySelector("#service-kicker");
const serviceTitle = document.querySelector("#service-title");
const serviceCopy = document.querySelector("#service-copy");
const serviceFit = document.querySelector("#service-fit");
const serviceFlow = document.querySelector("#service-flow");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = services[tab.dataset.service];

    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    serviceKicker.textContent = selected.kicker;
    serviceTitle.textContent = selected.title;
    serviceCopy.textContent = selected.copy;
    serviceFit.textContent = selected.fit;
    serviceFlow.textContent = selected.flow;
  });
});
