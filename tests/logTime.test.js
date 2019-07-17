import { Selector } from 'testcafe';
import { 
  email,
  password,
  project,
  taskName,
  date,
  hours,
  minutes,
  descriptionText,
  billable
} from './config';

const emailInput = Selector('#loginemail');
const passwordInput = Selector('#loginpassword');
const loginBTN = Selector('button').withText('Log in');
const tasksBTN = Selector('span.main-tabs__label').withText('TASKS');
const logTimeBTN = Selector('#logTaskTimeFirst');
const dateInput = Selector('.date-input');
const hoursInput = Selector('.hours-and-minutes :nth-child(1) input');
const minutesInput = Selector('.hours-and-minutes :nth-child(2) input');
const checkbox = Selector('.taskLogTimeForm label input[type=checkbox]');
const descriptionInput = Selector('#addOrEditTimeEntryDescriptionInput');
const logThisTimeBTN = Selector('.formFooter button span').withText('Log this Time');
const successMessage = Selector('.w-toaster__content').withText('Time logged successfully');


fixture `Lets log time everyday`
    .page `https://keenethics.teamwork.com`;

test('teamwork', async t => {
    // Test code
    await t
      .maximizeWindow()
      .typeText(emailInput, email)
      .typeText(passwordInput, password)
      .click(loginBTN)
      .navigateTo('../#projects/475302/tasks')
      .click(project)
      .click(tasksBTN)
      .click(taskName)
      .click(logTimeBTN)
      .selectText(dateInput)
      .pressKey('delete')
      .typeText(dateInput, date)
      .typeText(hoursInput, hours, { replace: true })
      .typeText(minutesInput, minutes, { replace: true })
      if (billable) {
        if (await checkbox.checked){
          console.log('checked');
        } else {
          await t
          .click(checkbox)
          .expect(checkbox.checked).ok();
        }
      } else {
        if (await checkbox.checked){
          await t
          .click(checkbox)
          .expect(checkbox.checked).notOk();
        } else {
          console.log('not checked');
        }
      }
    await t
      .typeText(descriptionInput, descriptionText, { replace: true })
      .click(logThisTimeBTN)
      .expect(successMessage.exists).ok()
      .wait(4000);

});