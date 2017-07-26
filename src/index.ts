syncFunc();
asyncFunc();

function syncFunc(): void {
    const syncArg = "syncArg";
    delay(syncArg, 2000)
    .then((syncResult) => {
    // tslint:disable-next-line:no-console
        console.log(syncArg === syncResult);
    });
}

async function asyncFunc(): Promise<void> {
    const asyncArg = "asyncArg";
    const asyncResult = await delay(asyncArg, 3000);
    // tslint:disable-next-line:no-console
    console.log(asyncArg === asyncResult);
}

function delay(value: any, time: number): Promise<any> {
   return new Promise((resolve, reject) => {
       setTimeout(() => resolve(value), time);
   });
}
