<template>
    <div>
        <div class="phrygia_info_post">
            <dl>
                <dt>
                    <img
                        src="https://phrygia.github.io/static/phrygia-c14fc3043cf0982ab6c58276a5308c8a.jpg"
                        alt="phrygia"
                    />
                </dt>
                <dd>
                    <strong>Chaeyeon Lee (phrygia)</strong>
                    <p>잘못된 부분이 있다면 댓글 부탁드립니다 -*</p>
                </dd>
            </dl>
        </div>
        <div ref="comment"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        // script tag 생성
        const utterances = document.createElement('script');
        utterances.type = 'text/javascript';
        utterances.async = true;
        utterances.crossorigin = 'anonymous';
        utterances.src = 'https://utteranc.es/client.js';

        utterances.setAttribute('issue-term', 'pathname'); // pathname|url|title|og:title 중 택 1
        utterances.setAttribute('theme', 'github-light'); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
        utterances.setAttribute('repo', `phrygia/blog-comments`); // 주의!! 사용할 repository

        this.$refs.comment.appendChild(utterances);
    },
};
</script>
