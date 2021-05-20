const nodemailer = require('nodemailer');
const email =  {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4d7b81c778e599",
      pass: "d2fc21bfe67c22"
    }
  };

const send = async (option) => {
     nodemailer.createTransport(email).sendMail(option, (error,info) => {
        if (error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }

     });
};

let email_data = {
    from: 'sjun8932@gmail.com',
    to: 'sjun8932@gmail.com',
    subject: '테스트메일 입니다',
    text: 'nodejs로 이메일 보내는 시스템 만들어보기'

}

send(email_data)