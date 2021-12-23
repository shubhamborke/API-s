const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post("/login", (req,res) => {
    const {email, password} = req.body
    if(email && password) {
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/login", (req,res) => {
    const {email, password} = req.query
    if(email && password) {
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/forgotPassword", (req,res) => {
    const {email} = req.body
    if(email){
        res.send(email)
    }else{
        res.send(false)
    }
})
app.get("/forgotPassword", (req,res) => {
    const {email} = req.query
    if(email){
        res.send(email)
    }else{
        res.send(false)
    }
})
app.post("/verifyOtp",(req,res) => {
    const {email, otp, newPassword} = req.body
    if(email && otp && newPassword){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/verifyOtp",(req,res) => {
    const {email, otp, newPassword} = req.query
    if(email && otp && newPassword){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/addLevel",(req,res) => {
    const {level, mark} = req.body
    if(level && mark){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/addLevel",(req,res) => {
    const {level, mark} = req.query
    if(level && mark){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.get("/getLevel",(req,res) => {
    const {id, level, mark} = req.query
    if(id && level && mark){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateLevel",(req,res) => {
    const {level, mark} = req.body
    if(level && mark){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/updateLevel",(req,res) => {
    const {level, mark} = req.query
    if(level && mark){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/deleteLevel",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.get("/deleteLevel",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.post("/addQuestion", (req,res) => {
    const { QuestionType } = req.body
    if( QuestionType ){
        res.send(QuestionType)
    }else{
        res.send(false)
    }
})
app.get("/addQuestion", (req,res) => {
    const { QuestionType } = req.query
    if( QuestionType ){
        res.send(QuestionType)
    }else{
        res.send(false)
    }
})
app.get("/getQuestion",(req,res) => {
    const {id, QuestionType } = req.query
    if(id && QuestionType){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateQuestion",(req,res) => {
    const {QuestionType} = req.body
    if(QuestionType){
        res.send(QuestionType)
    }else{
        res.send(false)
    }
})
app.get("/updateQuestion",(req,res) => {
    const {QuestionType} = req.query
    if(QuestionType){
        res.send(QuestionType)
    }else{
        res.send(false)
    }
})
app.post("/deleteQuestion",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.get("/deleteQuestion",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.post("/addBook",(req,res) => {
    const {bookName} = req.body
    if(bookName){
        res.send(bookName)
    }else{
        res.send(false)
    }
})
app.get("/addBook",(req,res) => {
    const {bookName} = req.query
    if(bookName){
        res.send(bookName)
    }else{
        res.send(false)
    }
})
app.get("/getBook",(req,res) => {
    const {id, bookName} = req.body
    if(id && bookName){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateBook",(req,res) => {
    const {bookName} = req.body
    if(bookName){
        res.send(bookName)
    }else{
        res.send(false)
    }
})
app.get("/updateBook",(req,res) => {
    const {bookName} = req.query
    if(bookName){
        res.send(bookName)
    }else{
        res.send(false)
    }
})
app.post("/deleteBook",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }
})
app.get("/deleteBook",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }
})
app.post("/addHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.body
    if(bookName && level && QuestionType){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/addHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.query
    if(bookName && level && QuestionType){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.get("/getHeading",(req,res) => {
    const {id, bookName, QuestionType} = req.body
    if(id && bookName && QuestionType){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.body
    if(bookName && level && QuestionType){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/updateHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.query
    if(bookName && level && QuestionType){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/deleteHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.body
    if(bookName && level && QuestionType){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/deleteHeading",(req,res) => {
    const {bookName, level, QuestionType} = req.query
    if(bookName && level && QuestionType){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/addChapter",(req,res) => {
    const {chapterName} = req.body
    if(chapterName){
        res.send(chapterName)
    }else{
        res.send(false)
    }
})
app.get("/addChapter",(req,res) => {
    const {chapterName} = req.query
    if(chapterName){
        res.send(chapterName)
    }else{
        res.send(false)
    }
})
app.get("/getChapter",(req,res) => {
    const {id, chapterName} = req.body
    if(id && chapterName){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateChapter",(req,res) => {
    const {chapterName} = req.body
    if(chapterName){
        res.send(chapterName)
    }else{
        res.send(false)
    }
})
app.get("/updateChapter",(req,res) => {
    const {chapterName} = req.query
    if(chapterName){
        res.send(chapterName)
    }else{
        res.send(false)
    }
})
app.post("/deleteChapter",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.get("/deleteChapter",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.post("/addQuestionEntry",(req,res) => {
    const {chapter, level, QuestionType, bookName, question, solution} = req.body
    if(chapter && level && QuestionType && bookName && question && solution){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/addQuestionEntry",(req,res) => {
    const {chapter, level, QuestionType, bookName, question, solution} = req.query
    if(chapter && level && QuestionType && bookName && question && solution){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.get("/getQuestionEntry",(req,res) => {
    const {id, chpter, level, QuestionType, bookName, question, solution} = req.body
    if(id && chapter && level && QuestionType && bookName && question && solution){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateQuestionEntry",(req,res) => {
    const {chapter, level, QuestionType, bookName,question, solution} = req.body
    if(chapter && level && QuestionType && bookName && question && solution){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/updateQuestionEntry",(req,res) => {
    const {chapter, level, QuestionType, bookName,question, solution} = req.query
    if(chapter && level && QuestionType && bookName && question && solution){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/deleteQuestionEntry",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.get("/deleteQuestionEntry",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.post("/addGeneratePaper",(req,res) => {
    const {paperName, paperDate, paperMark, paperDuration, paperIntreuction, level, QuestionType, heading, TMark, chooseChapter, totalQue, enterQue, restartQue, randomSize} = req.body
    if(paperName && paperDate && paperMark && paperDuration && paperIntreuction && level && QuestionType && heading && TMark && chooseChapter && totalQue && enterQue && restartQue && randomSize){
        res.body(req.body)
    }else{
        res.send(false)
    }
})
app.get("/addGeneratePaper",(req,res) => {
    const {paperName, paperDate, paperMark, paperDuration, paperIntreuction, level, QuestionType, heading, TMark, chooseChapter, totalQue, enterQue, restartQue, randomSize} = req.query
    if(paperName && paperDate && paperMark && paperDuration && paperIntreuction && level && QuestionType && heading && TMark && chooseChapter && totalQue && enterQue && restartQue && randomSize){
        res.body(req.query)
    }else{
        res.send(false)
    }
})
app.get("/getQuestion", (req,res) => {
    const {id, paperName, paperDate, paperDuration, paperMark} = req.body
    if(id && paperName && paper  && paperDuration && paperMark){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.post("/updateQuestionEntry", (req,res) => {
    const {paperName, paperDate, paperDuration, paperMark} = req.body
    if(paperName && paperDate && paperDuration && paperMark){
        res.send(req.body)
    }else{
        res.send(false)
    }
})
app.get("/updateQuestionEntry", (req,res) => {
    const {paperName, paperDate, paperDuration, paperMark} = req.query
    if(paperName && paperDate && paperDuration && paperMark){
        res.send(req.query)
    }else{
        res.send(false)
    }
})
app.post("/deleteQuestionWntry",(req,res) => {
    const {id} = req.body
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})
app.get("/deleteQuestionWntry",(req,res) => {
    const {id} = req.query
    if(id){
        res.send(id)
    }else{
        res.send(false)
    }
})

app.listen(port, () => console.log("listing on port " + port))