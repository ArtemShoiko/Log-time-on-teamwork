import { Selector } from 'testcafe';

export const email = 'artem.shoiko@keenethics.com';
export const password = 'password';

const projectName = 'ThirdBridge';
const task = 'QA activities';
export const date = '17/07/2019';           //dd/mm/yyyy
export const hours = '4';
export const minutes = '5';
export const descriptionText = 'Some important stuff';
export const billable = true;



export const taskName = Selector('.task-name a').withText(`${task}`);
export const project = Selector('.w-project__header-text', { timeout: 20000 }).withText(`${projectName}`);
