syncFunc();
asyncFunc();

function syncFunc(): void {
    const syncBeforeDelayArg = "syncBeforeDelayArg";
    delay(syncBeforeDelayArg, 2000)
    .then((syncDelayResult) => {
        const syncAfterDelayArg = "syncAfterDelayArg";
        // tslint:disable-next-line:no-console
        console.log(syncBeforeDelayArg, syncDelayResult, syncAfterDelayArg);
    });
}

async function asyncFunc(): Promise<void> {
    const asyncBeforeDelayArg = "asyncBeforeDelayArg";
    const asyncDelayResult = await delay(asyncBeforeDelayArg, 3000);
    const asyncAfterDelayArg = "asyncAfterDelayArg";
    // tslint:disable-next-line:no-console
    console.log(asyncBeforeDelayArg, asyncDelayResult, asyncAfterDelayArg);
}

function delay(value: any, time: number): Promise<any> {
   return new Promise((resolve, reject) => {
       setTimeout(() => resolve(value), time);
   });
}
