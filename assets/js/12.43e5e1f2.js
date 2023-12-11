(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("git 기본 사용법")]),t._v(" "),n("h2",{attrs:{id:"기본-명령어"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#기본-명령어"}},[t._v("#")]),t._v(" 기본 명령어")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git 저장소 생성 (.git 디렉토리 생성)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# repo_url의 저장소를 원격 저장소로 설정")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("repo_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git repository 로컬에 내려받기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("repo_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# repository 상태 표시")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 스테이지에 선택적 파일 추가 (index.html만 올리기)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" index.html\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 스테이지에 전체 파일 추가")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git add + git commit 동시에")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit_message"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 스테이지 영역의 파일을 repository 변경사항에 반영")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -m : message")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit_message"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 커밋 메시지 여러줄 작성")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message 1\nmessage 2\nmessage 3\n...\nmessage last"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 마지막 커밋 메시지 수정")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edit commit_message"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# branch 목록보기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 branch 생성하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 선택한 branch로 변경하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 branch 생성후 전환하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 원격 저장소의 branch를 새로 만든 branch로 체크아웃")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" origin/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 선택한 branch 삭제하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 로컬 branch와 원격 branch 모두 표시")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치에 push")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 원격 저장소의 master 브랜치에 push")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push의 기본값을 origin의 master 브랜치로 지정")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -u : upstream (업스트림을 설정하여 저장소를 중앙 저장소로 연결하기 위함)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치의 변경사항을 로컬에 업데이트")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin remote의 변경사항을 로컬에 업데이트")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log 보기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 커밋에서 Log 및 변경된 내용 확인")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 브랜치를 그래프로 확인")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가장 최근에 수행한 작업부터 repository에서 진행된 모든 로그 볼 수 있음")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치의 마지막 커밋과 차이점 비교")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 최신 commit과의 차이점 비교")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HEAD : 현재 브랜치에서 가장 최신의 커밋을 나타내는 키워드")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 커밋과 특정 파일의 차이점 비교")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit_ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -- "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("파일 경로"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치와 다른 branch로부터 변경사항 합치기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치에서 [branch]브랜치를 합침")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --no--ff "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이전의 커밋 해시버전으로 복원")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --hard : 돌아가려는 이력이후의 모든 내용 및 이력을 삭제")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --soft : 돌아가려 했던 이력으로 돌아가지만, 이후의 변경 이력은 모두 삭제되지만 내용이 지워지지 않고 인덱스 or 스테이지는 남아있음")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --mixed : 돌아가려 했던 이력으로 돌아가고 이후의 변경 이력은 모두 삭제되지만 변경 내용은 지워지지 않는다. 인덱스는 초기화됨")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset 옵션 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commig_hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 지정한 커밋 해시버전을 최상단 커밋으로 올리면서 돌아가기 (revert 히스토리가 남음)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reset과 다른점은 커밋을 삭제하는 것이 아닌 커밋을 추가함")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commig_hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 작업도중 다른 branch로 체크아웃을 해야 하는데 커밋할 수 없을때 임시로 branch의 작업내용을 보존하기 위해 사용")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 임시 작업내용 복원")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n")])])]),n("h2",{attrs:{id:"브랜치-생성하여-작업하고-공통-브랜치에서-변경사항-다운받기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#브랜치-생성하여-작업하고-공통-브랜치에서-변경사항-다운받기"}},[t._v("#")]),t._v(" 브랜치 생성하여 작업하고 공통 브랜치에서 변경사항 다운받기")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 공통 브랜치 : main 일때")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 branch 생성하고 체크아웃")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 branch에 변경사항 commit하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit_message"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# main branch로 이동하여 내 branch의 변경사항을 main에 병합하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout main\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 내 branch로 이동하여 수정사항 commit하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit_message"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 원격 저장소의 main branch에 push하기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#이후")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 가능\n")])])]),n("h2",{attrs:{id:"좋은-커밋-메시지를-작성하는-7가지-규칙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#좋은-커밋-메시지를-작성하는-7가지-규칙"}},[t._v("#")]),t._v(" 좋은 커밋 메시지를 작성하는 7가지 규칙")]),t._v(" "),n("ol",[n("li",[t._v("주제와 본문을 빈줄로 분리하기")]),t._v(" "),n("li",[t._v("주제는 50자로 제한하기")]),t._v(" "),n("li",[t._v("주제의 첫 글자는 대문자로 쓰기")]),t._v(" "),n("li",[t._v("주제에 마침표를 넣지 않기")]),t._v(" "),n("li",[t._v("주제는 명령으로 작성하기")]),t._v(" "),n("li",[t._v("본문은 72자에 줄바꿈하기")]),t._v(" "),n("li",[t._v("how 보단 what과 why를 설명하기")])]),t._v(" "),n("h2",{attrs:{id:"커밋-메시지의-구조"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#커밋-메시지의-구조"}},[t._v("#")]),t._v(" 커밋 메시지의 구조")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   -- 헤더 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("주제"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("blank"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                        -- 빈줄\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                         -- 본문"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("생략 가능"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("blank"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                        -- 빈줄\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                       -- 바닥글/꼬리말\n")])])]),n("h2",{attrs:{id:"subject의-type은-커밋의-성격을-나타낸다"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subject의-type은-커밋의-성격을-나타낸다"}},[t._v("#")]),t._v(" subject의 type은 커밋의 성격을 나타낸다.")]),t._v(" "),n("table",{staticClass:"ph_tbl"},[n("tr",[n("th",[t._v("type명")]),t._v(" "),n("th",[t._v("설명")])]),t._v(" "),n("tr",[n("td",[t._v("feat")]),t._v(" "),n("td",[t._v("새로운 기능")])]),t._v(" "),n("tr",[n("td",[t._v("fix")]),t._v(" "),n("td",[t._v("버그 수정")])]),t._v(" "),n("tr",[n("td",[t._v("docs")]),t._v(" "),n("td",[t._v("문서 수정")])]),t._v(" "),n("tr",[n("td",[t._v("style")]),t._v(" "),n("td",[t._v("코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우")])]),t._v(" "),n("tr",[n("td",[t._v("design")]),t._v(" "),n("td",[t._v("css 등 사용자 UI 디자인 변경")])]),t._v(" "),n("tr",[n("td",[t._v("test")]),t._v(" "),n("td",[t._v("테스트 코드, 리펙토링 테스트 코드 추가")])]),t._v(" "),n("tr",[n("td",[t._v("refactor")]),t._v(" "),n("td",[t._v("프로덕션 코드 리펙토링")])]),t._v(" "),n("tr",[n("td",[t._v("build")]),t._v(" "),n("td",[t._v("빌드 관련 파일 수정사항")])]),t._v(" "),n("tr",[n("td",[t._v("chore")]),t._v(" "),n("td",[t._v("빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우")])]),t._v(" "),n("tr",[n("td",[t._v("ci")]),t._v(" "),n("td",[t._v("CI관련 설정 수정")])]),t._v(" "),n("tr",[n("td",[t._v("rename")]),t._v(" "),n("td",[t._v("파일/ 폴더명을 수정하거나 옮기기만 하는 경우")])]),t._v(" "),n("tr",[n("td",[t._v("remove")]),t._v(" "),n("td",[t._v("파일을 삭제만 하는 경우")])]),t._v(" "),n("tr",[n("td",[t._v("!BREAKING CHANGE")]),t._v(" "),n("td",[t._v("커다란 API 변경")])]),t._v(" "),n("tr",[n("td",[t._v("!HOTFIX")]),t._v(" "),n("td",[t._v("치명적인 버그를 고치는 경우")])])]),t._v(" "),n("h2",{attrs:{id:"바닥글-꼬리말"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#바닥글-꼬리말"}},[t._v("#")]),t._v(" 바닥글/꼬리말")]),t._v(" "),n("ul",[n("li",[t._v('꼬리말은 "type: #이슈 번호" 형식')]),t._v(" "),n("li",[t._v("이슈 번호는 쉼표(,)로 구분")])]),t._v(" "),n("table",{staticClass:"ph_tbl"},[n("tr",[n("th",[t._v("type명")]),t._v(" "),n("th",[t._v("설명")])]),t._v(" "),n("tr",[n("td",[t._v("Fixes")]),t._v(" "),n("td",[t._v("이슈 수정중 (미해결)")])]),t._v(" "),n("tr",[n("td",[t._v("Resolves")]),t._v(" "),n("td",[t._v("이슈 수정완료")])]),t._v(" "),n("tr",[n("td",[t._v("Ref")]),t._v(" "),n("td",[t._v("참고할 이슈가 있을 때 ")])]),t._v(" "),n("tr",[n("td",[t._v("Related to")]),t._v(" "),n("td",[t._v("해당 커밋에 관련된 이슈번호 (미해결)")])])]),t._v(" "),n("h2",{attrs:{id:"커밋-구조를-적용한-예시"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#커밋-구조를-적용한-예시"}},[t._v("#")]),t._v(" 커밋 구조를 적용한 예시")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Feat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"쪽지알림 On/Off 기능 추가"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n쪽지알림을 On"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Off 할 수 있도록 기능을 추가함\n\nResolves "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" #"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),t._v("\nRelated to"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" #"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),n("Comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);