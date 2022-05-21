import HistoryList from './HistoryList';
export default class BasePage {
  baseURL: string;
  calcBtnGlobal: string;
  inputAndOutput : string;
  bla : string;
  historyList: string;
  dropDownHistory: String;
  historyCalc: HistoryList;
  


  constructor(url: string) {
    this.baseURL = `${url}`;
    this.calcBtnGlobal = '#Btn';
    this.inputAndOutput="#histframe > ul > li:nth-child(1) > p.r";
    this.historyList="#histframe";
    this.dropDownHistory=".dropdown-toggle.pull-right";
    this.historyCalc= new HistoryList();
    this.bla="#input";
  }

   calcBtn(operatorOrNumber: String){
    return cy.get(this.calcBtnGlobal.concat(operatorOrNumber.toString()))
  }
  historyListElement(historyListCss : String){
    return cy.get(historyListCss.toString());
    
  }


   inputOrOutputText(){
    return cy.get(this.inputAndOutput);
  }
  blabla(){
    return cy.get(this.bla);
  }

  historyOpen(){
    return cy.get(this.dropDownHistory.toString());
    
    

  }

  load(path: string = ''): void {
    cy.visit(`${this.baseURL}/${path}`);
  }


}

