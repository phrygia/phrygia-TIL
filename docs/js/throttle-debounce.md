---
title: "throttling과 debouncing"
---

## throttling (쓰로틀링)

짧은 시간 간격으로 이벤트가 연속해서 발생하더라도 <u>일정 시간 간격으로 이벤트 핸들러가 최대 한 번만 호출되도록</u> 한다. <br>
즉, 스로틀은 짧은 시간 간격으로 연속해서 발생하는 이벤트를 그릅화해서 일정 시간 단위로 이벤트 핸들러가 호출되도록 호출 주기를 만든다. <br>
ex ) scroll 이벤트가 짧은 시간 간격으로 연속해서 발생하는 경우

```html
<div class="container">
  <div class="content"></div>
</div>
<div>
  일반 이벤트 핸들러가 scroll 이벤트를 처리한 횟수:
  <span class="normal-count">0</span>
</div>
<div>
  스크롤 이벤트 핸들러가 scroll 이벤트를 처리한 횟수:
  <span class="throttle-count">0</span>
</div>

<script>
  const $container = document.querySelector(".container");
  const $normalCount = document.querySelector(".normal-count");
  const $throttleCount = document.querySelector(".throttle-count");

  const throttle = (callback, delay) => {
    return (event) => {
      if (timerId) return;
      timerId = setTimeout(
        () => {
          callback(event);
          timerId = null;
        },
        delay,
        event
      );
    };
  };

  let normalCount = 0;
  $container.addEventListener("scroll", () => {
    $normalCount.textContent = ++normalCount;
  });
  let throttleCount = 0;
  $container.addEventListener(
    "scroll",
    throttle(() => {
      $throttleCount.textContent = ++throttleCount;
    }, 100)
  );
</script>
```

## debouncing (디바운싱)

<Comment />
