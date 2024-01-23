export function getWidget(count: number) {
    return `
    <style type="text/css">
    a {
        text-decoration: none;
        outline: 0
    }

    .widget {
        display: inline;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        white-space: nowrap;
    }

    *, ::after, ::before {
        box-sizing: unset;
    }

    .btn,
    .social-count {
        position: relative;
        display: inline-block;
        height: 14px;
        padding: 2px 5px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
        border: 1px solid
    }

    .btn {
        border-radius: .25em
    }

    .btn:not(:last-child) {
        border-radius: .25em 0 0 .25em
    }

    .social-count {
        border-left: 0;
        border-radius: 0 .25em .25em 0
    }

    .widget-lg .btn,
    .widget-lg .social-count {
        height: 20px;
        padding: 3px 10px;
        font-size: 12px;
        line-height: 20px
    }

    .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor
    }

    .btn {
        color: #24292e;
        background-color: #eff3f6;
        border-color: #c5c9cc;
        border-color: rgba(27, 31, 35, .2);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
        background-image: -moz-linear-gradient(top, #fafbfc, #eff3f6 90%);
        background-image: linear-gradient(180deg, #fafbfc, #eff3f6 90%);
        filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')
    }

    :root .btn {
        filter: none
    }

    .btn:focus,
    .btn:hover {
        background-color: #e6ebf1;
        background-position: -0.5em;
        border-color: #9fa4a9;
        border-color: rgba(27, 31, 35, .35);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
        background-image: -moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);
        background-image: linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);
        filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')
    }

    :root .btn:focus,
    :root .btn:hover {
        filter: none
    }

    .btn:active {
        background-color: #e9ecef;
        border-color: #a1a4a8;
        border-color: rgba(27, 31, 35, .35);
        box-shadow: inset 0 .15em .3em rgba(27, 31, 35, .15);
        background-image: none;
        filter: none
    }

    .social-count {
        color: #24292e;
        background-color: #fff;
        border-color: #d1d2d3;
        border-color: rgba(27, 31, 35, .2)
    }

    .social-count:focus,
    .social-count:hover {
        color: #0366d6
    }

    .octicon-heart {
        color: #ea4aaa
    }

    .octicon-octocat{
        width: 16px;
        height: 16px;
        object-fit: contain;
        position: relative;
        bottom: 2px;
    }
</style>
<div class="widget widget-lg">
    <a class="btn" href="https://github.com/supertokens/supertokens-core" rel="noopener" target="_blank" aria-label="Star SuperTokens on GitHub">
        <img class="octicon octicon-octocat" aria-hidden="true" src="/static/assets/navbar/github.png" />
        <span>Star</span>
    </a>
    <a class="social-count" href="https://github.com/supertokens/supertokens-core"
        rel="noopener" target="_blank" aria-label="3212 stargazers on GitHub">
        ${count}
    </a>
</div>
    `;
}
