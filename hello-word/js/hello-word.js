console.log(G);

G.F.loadMain = () => {
    this.AI = G.F.mainAI;
};
G.F.mainAI = () => {

};
G.F.shipAI = () => {

};

G.F.bulletAI = () => {

};
G.F.explosinoAI = (cmd) => {

};

G.makeBlock('main',G.F.loadMain).loadBlock('main')