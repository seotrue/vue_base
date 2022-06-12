// 노드에서 절대 경로 적을때 도와주는 경로
const path = require('path')

module.exports ={
    entry: {
        // 하나로 합쳐질 파일의 이름
        app: path.join(__dirname,'main.js'),
    },
    module: {
        // 합칠때 어떻게 합칠껀지, rules에 개재
        rules: [{}]

    },
    plugins: [],
    output: {
        filename: "[name].js",
        path: path.join(__dirname,'dist')// 최종 빌드시 해당 폴더에 결과물이 나오라ㅏ(app.js)m
        publicPath: "/dist"
    }
};