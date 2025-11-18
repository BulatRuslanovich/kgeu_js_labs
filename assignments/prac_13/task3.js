// INFO: Предсказание вывода для четырех сценариев с прототипами
export function runTask() {
  function runScenarioA() {
    function MakeUser() {}
    MakeUser.prototype = { isAdmin: true };
    const user = new MakeUser();
    MakeUser.prototype = {};
    return user.isAdmin;
  }

  function runScenarioB() {
    function MakeUser() {}
    MakeUser.prototype = { isAdmin: true };
    const user = new MakeUser();
    MakeUser.prototype.isAdmin = false;
    return user.isAdmin;
  }

  function runScenarioC() {
    function MakeUser() {}
    MakeUser.prototype = { isAdmin: true };
    const user = new MakeUser();
    delete MakeUser.prototype.isAdmin;
    return user.isAdmin;
  }

  function runScenarioD() {
    function MakeUser() {}
    MakeUser.prototype = { isAdmin: true };
    const user = new MakeUser();
    delete user.isAdmin;
    return user.isAdmin;
  }

  return JSON.stringify(
    [
      { variant: 'a', result: runScenarioA() },
      { variant: 'b', result: runScenarioB() },
      { variant: 'c', result: runScenarioC() },
      { variant: 'd', result: runScenarioD() },
    ],
    null,
    2,
  );
}

