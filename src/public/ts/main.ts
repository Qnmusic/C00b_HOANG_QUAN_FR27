document.addEventListener('DOMContentLoaded', (): void => {
    // get elment input and button
    const containerStartId: HTMLInputElement | null = document.getElementById('start_id') as HTMLInputElement;
    const containerEndId: HTMLInputElement | null = document.getElementById('end_id') as HTMLInputElement;
    const containerBtnId: HTMLElement | null = document.getElementById('btn_id');

    // get element btn play and pause
    const containerBtnPlay: HTMLElement | null = document.getElementById('btn_play');
    const containerBtnPause: HTMLElement | null = document.getElementById('btn_pause');
    const containerbtn_refresh: HTMLElement | null = document.getElementById('btn_refresh');

    // get element btn content, ascending, decrease
    const containerContentShowNumber: HTMLElement | null = document.getElementById('content_show_number');
    const containerBtnDecrease: HTMLElement | null = document.getElementById('btn_decrease');
    const containerBtnAscending: HTMLElement | null = document.getElementById('btn_ascending');

    // get element btn Show hello and googbye
    const containerBtnShowHello: HTMLElement | null = document.getElementById('btn_ShowHello');
    const containerBtnShowGoogbye: HTMLElement | null = document.getElementById('btn_ShowGoogbye');


    // create variable to save content
    let contentShowNumber: number = 0;

    // create variable to save function interval
    let intervalId: number;



    // handle onchage with input and onclick with button
    if (containerStartId && containerEndId && containerBtnId && containerContentShowNumber
        && containerBtnDecrease && containerBtnAscending && containerBtnPlay && containerBtnPause
        && containerbtn_refresh
    ) {
        // refresh content number
        containerContentShowNumber.innerText = '0';

        // create variable new container ContentShowNumber old
        let contentShowNumberNew: number;

        // handle onclick apply value start with end
        containerBtnId.onclick = (): void => {
            containerContentShowNumber.innerText = containerStartId.value;
            contentShowNumber = Number(containerContentShowNumber.innerText);

            clearInterval(intervalId);
            containerBtnPlay.style.display = 'inline-block';
            containerBtnPause.style.display = 'none';

            // assignment value
            contentShowNumberNew = contentShowNumber;
        };

        // assignment value
        contentShowNumberNew = contentShowNumber;

        // handle onlick onchage element btn content --> ascending, decrease
        containerBtnDecrease.onclick = (): void => {
            if (Number(containerStartId.value) < Number(containerEndId.value)) {
                if (contentShowNumberNew > Number(containerStartId.value)) {
                    containerContentShowNumber.innerHTML = String(contentShowNumberNew -= 1);
                } else {
                    alert('Đã đạt đến ngưỡng Min!');
                };
            } else {
                if (contentShowNumberNew > Number(containerEndId.value)) {
                    containerContentShowNumber.innerHTML = String(contentShowNumberNew -= 1);
                } else {
                    alert('Đã đạt đến ngưỡng Min!');
                };
            };
        };

        containerBtnAscending.onclick = (): void => {
            if (Number(containerStartId.value) < Number(containerEndId.value)) {
                if (contentShowNumberNew < Number(containerEndId.value)) {
                    containerContentShowNumber.innerHTML = String(contentShowNumberNew += 1);
                } else {
                    alert('Đã đạt đến ngưỡng Max!');
                };
            } else {
                if (contentShowNumberNew < Number(containerStartId.value)) {
                    containerContentShowNumber.innerHTML = String(contentShowNumberNew += 1);
                } else {
                    alert('Đã đạt đến ngưỡng Max!');
                };
            };
        };

        // handle onclick play
        containerBtnPlay.onclick = () => {
            contentShowNumber = Number(containerContentShowNumber.innerText);

            // assignment value
            contentShowNumberNew = contentShowNumber;

            if (Number(containerStartId.value) < Number(containerEndId.value)) {
                // function after 1s plus 1 value
                intervalId = setInterval(() => {
                    if (contentShowNumberNew < Number(containerEndId.value)) {
                        containerContentShowNumber.innerHTML = String(contentShowNumberNew += 1);
                    } else {
                        clearInterval(intervalId);
                        containerBtnPlay.style.display = 'inline-block';
                        containerBtnPause.style.display = 'none';
                    };
                }, 1000);
            } else {
                // function after 1s subtract 1 value
                intervalId = setInterval(() => {
                    if (contentShowNumberNew > Number(containerEndId.value)) {
                        containerContentShowNumber.innerHTML = String(contentShowNumberNew -= 1);
                    } else {
                        // delete function interval
                        clearInterval(intervalId);

                        // hidden display button play and pause
                        containerBtnPlay.style.display = 'inline-block';
                        containerBtnPause.style.display = 'none';
                    };
                }, 1000);
            };

            // hidden display button play and pause
            containerBtnPlay.style.display = 'none';
            containerBtnPause.style.display = 'inline-block';
        };

        // handle onclick pause
        containerBtnPause.onclick = () => {
            // delete function interval
            clearInterval(intervalId);

            // hidden display button play and pause
            containerBtnPlay.style.display = 'inline-block';
            containerBtnPause.style.display = 'none';
        };

        // handle onclick refresh
        containerbtn_refresh.onclick = (): void => {
            // assignment value start initial
            contentShowNumber = Number(containerStartId.value);

            if (Number(containerContentShowNumber.innerHTML) !== contentShowNumber) {
                // delete function interval
                clearInterval(intervalId);

                // hidden display button play and pause
                containerBtnPlay.style.display = 'inline-block';
                containerBtnPause.style.display = 'none';

                // assgignment value
                containerContentShowNumber.innerText = containerStartId.value;

                contentShowNumberNew = Number(containerStartId.value);
            }
            else {
                alert('Đã đưa về giá trị ban đầu!');
            };
        };
    };

    // handle show notification hello and googbye
    if (containerBtnShowHello && containerBtnShowGoogbye) {
        containerBtnShowHello.onclick = (): void => {
            alert('Hello my friends!');
        };
        containerBtnShowGoogbye.onclick = (): void => {
            alert('GoogBye my friends!');
        };
    };
});


