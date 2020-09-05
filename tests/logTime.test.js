import { Selector } from 'testcafe';

const emailInput = Selector('#loginemail');
const passwordInput = Selector('#loginpassword');
const loginBTN = Selector('button').withText('Log in');
const logTimeBTN = Selector('#logTaskTimeFirst');
const hoursInput = Selector('.hours-and-minutes :nth-child(1) input');
const minutesInput = Selector('.hours-and-minutes :nth-child(2) input');
const descriptionInput = Selector('#addOrEditTimeEntryDescriptionInput');
const logThisTimeBTN = Selector('.formFooter button span').withText('Log this Time');
const successMessage = Selector('.w-toaster__content').withText('Time logged successfully');
const task = 'General study';
const taskName = Selector('.task-name a').withText(`${task}`);

fixture `Lets log time everyday`
    .page `https://keenethics.teamwork.com`;

test('teamwork', async t => {
    await t
      .typeText(emailInput, 'artem.shoiko@keenethics.com')
      .typeText(passwordInput, 'password')
      .click(loginBTN)
      .navigateTo('https://keenethics.teamwork.com/#projects/130603/tasks')
      .click(taskName)
      .click(logTimeBTN)
      .typeText(hoursInput, '1', { replace: true })
      .typeText(minutesInput, '0', { replace: true })
      .typeText(descriptionInput, 'Tech-talk from Artem', { replace: true })
      .click(logThisTimeBTN)
      .expect(successMessage.exists).ok()
      .wait(4000);
});