import MainPage from "./MainPage";



export default class HistoryList  {
  resultList;
  formulaList;
  

  constructor() {
    this.resultList="p[data-inp].l";
    this.formulaList="p[title].r";
  }

   historyCalcList(){
    return cy.get(this.formulaList);
    
  }
   historyResultList(){
    return cy.get(this.resultList);
  }

  





}
