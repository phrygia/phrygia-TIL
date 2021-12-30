---
title: "React 성능 최적화"
---

<h1>React 성능 최적화</h1>

<br>
Hook를 기준으로 성능 최적화에 대해 알아보자.
<h3>* 컴포넌트가 리렌더링 되는 조건</h3>

1. 상위 컴포넌트의 `props`가 변경될 때
2. 상위 컴포넌트가 `리렌더링` 될 때
3. 자신의 `state` 값이 변결될 때

## 1. React.memo 컴포넌트 메모제이션


## 2. useMemo
shouldComponentUpdate : 변경된 값만 렌더링 되도록 하기때문에 필요없는 리렌더링을 막을 수 있다.<br><br>
함수형 컴포넌트에서는 클래스형 컴포넌트의 `shouldComponentUpdate`를 사용할 수 없는데, 공식문서에서는 그 대안으로 useMemo를 제시하고 있다. <br>
useMemo는 종속 변수들이 변하지 않으면 함수를 다시 호출하지 않고 이전에 반환한 참조값을 재사용하여 컴포넌트의 리렌더링 성늘을 최적화 해줄 수 있다.<br>

```js
// Average.jsx
import React, { useState } from 'react';

const getAverage = numbers => {
    const n = numbers.length;
    if(n === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / n;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => setNumber(e.target.value);
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>추가하기</button>
            <ul>
                {list.map((val, idx) => {
                    <li key={idx}>{val}</li>
                })}
            </ul>
            <div>
                <b>평균값 :</b> {getAverage(list)}
            </div>
        </div>
    )
}
export default Average;
```

useMemo를 사용하면 특정값이 바뀌었을때만 연산을 실행한다.

```js
import React, { useState, useMemo} from 'react';

const Average = () => {
    ... 
    // avg 추가 
    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            ...
            <b>평균값 :</b> {avg}
        </div>
    )
}
```


## 3. useCallback

## 4. 컴포넌트를 매핑할 때에는 index를 key값으로 사용하지 않는다.

## 5. 하위 컴포넌트의 props로 객체를 전달하는 경우 변형하지말고 넘겨준다.

## 6. 객체 타입의 state는 최대한 분할하여 선언한다.

## 6. useState의 함수형 업데이트

## 7. Input의 onChange 최적화

<br>

<div class="from add">
    <ul>
        <li>- 내용참고: <a href="https://velog.io/@shin6403/React-렌더링-성능-최적화하는-7가지-방법-Hooks-기준" tearget="_blank">https://velog.io/@shin6403/React-렌더링-성능-최적화하는-7가지-방법-Hooks-기준</a></li>
        <li style="padding-left: 55px;"><a href="https://cocoder16.tistory.com/36" target="_blank">https://cocoder16.tistory.com/36</a></li>
    </ul>
</div>

<Comment />

