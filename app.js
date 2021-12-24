const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.send("Login Successfull with " + email +" " + password);
  } else {
    res.send("Not found");
  }
});
app.post("/forgotPassword", (req, res) => {
  const { email } = req.body;
  if (email) {
    res.send("Request send at " + email);
  } else {
    res.send("Not found");
  }
});

app.post("/verifyOtp", (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (email && otp && newPassword) {
    res.send("Otp verified with " + otp);
  } else {
    res.send("Not found");
  }
});
app.post("/addLevel", (req, res) => {
  const { level, mark } = req.body;
  if (level && mark) {
    res.send("Level added for " + level +" "+mark);
  } else {
    res.send("Error occured");
  }
});
app.get("/getLevel", (req, res) => {
  const { id, level, mark } = req.body;
  if (id && level && mark) {
    res.send("Level found for " + level);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateLevel", (req, res) => {
  const { level, mark } = req.body;
  if (level && mark) {
    res.send("Level updated with " + level + " " + mark);
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteLevel", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  } else {
    res.send("Not found");
  }
});
app.post("/addQuestion", (req, res) => {
  const { QuestionType } = req.body;
  if (QuestionType) {
    res.send("Question added as " + QuestionType);
  } else {
    res.send("Error occured");
  }
});
app.get("/getQuestion", (req, res) => {
  const { id, QuestionType } = req.body;
  if (id && QuestionType) {
    res.send("Question found for " + QuestionType);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateQuestion", (req, res) => {
  const { QuestionType } = req.body;
  if (QuestionType) {
    res.send("Question updated for " + QuestionType);
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteQuestion", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  } else {
    res.send("Not found");
  }
});
app.post("/addBook", (req, res) => {
  const { bookName } = req.body;
  if (bookName) {
    res.send("Book added as " + bookName);
  } else {
    res.send("Error occured");
  }
});
app.get("/getBook", (req, res) => {
  const { id, bookName } = req.body;
  if (id && bookName) {
    res.send("Book found for " + bookName);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateBook", (req, res) => {
  const { bookName } = req.body;
  if (bookName) {
    res.send(bookName + " Updated");
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteBook", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  }else{
      res.send(id + "Not found")
  }
});
app.post("/addHeading", (req, res) => {
  const { bookName, level, QuestionType } = req.body;
  if (bookName && level && QuestionType) {
    res.send("Heading added as " + bookName);
  } else {
    res.send("Error occured");
  }
});
app.get("/getHeading", (req, res) => {
  const { id, bookName, QuestionType } = req.body;
  if (id && bookName && QuestionType) {
    res.send("Heading found for " + bookName + " " + QuestionType);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateHeading", (req, res) => {
  const { bookName, level, QuestionType } = req.body;
  if (bookName && level && QuestionType) {
    res.send("Heading updated for " + bookName);
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteHeading", (req, res) => {
  const { bookName, level, QuestionType } = req.body;
  if (bookName && level && QuestionType) {
    res.send(bookName + " " + level + " deleted");
  } else {
    res.send("Not found");
  }
});
app.post("/addChapter", (req, res) => {
  const { chapterName } = req.body;
  if (chapterName) {
    res.send("Chapter added as " + chapterName);
  } else {
    res.send("Error occured");
  }
});
app.get("/getChapter", (req, res) => {
  const { id, chapterName } = req.body;
  if (id && chapterName) {
    res.send("Chapter found for " + chapterName);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateChapter", (req, res) => {
  const { chapterName } = req.body;
  if (chapterName) {
    res.send("Chapter updated for " + chapterName);
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteChapter", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  } else {
    res.send("Not found");
  }
});
app.post("/addQuestionEntry", (req, res) => {
  const { chapter, level, QuestionType, bookName, question, solution } =
    req.body;
  if (chapter && level && QuestionType && bookName && question && solution) {
    res.send("Entry added successfully");
  } else {
    res.send("Error occured");
  }
});
app.get("/getQuestionEntry", (req, res) => {
  const { id, chapter, level, QuestionType, bookName, question, solution } =
    req.body;
  if (
    id &&
    chapter &&
    level &&
    QuestionType &&
    bookName &&
    question &&
    solution
  ) {
    res.send("Entry found for BookName as " + bookName);
  } else {
    res.send("Not found");
  }
});
app.patch("/updateQuestionEntry", (req, res) => {
  const { chapter, level, QuestionType, bookName, question, solution } =
    req.body;
  if (chapter && level && QuestionType && bookName && question && solution) {
    res.send("Entry updated for " + bookName);
  } else {
    res.send("Not found");
  }
});
app.delete("/deleteQuestionEntry", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  } else {
    res.send("Not found");
  }
});
app.post("/addPaperQuestionEntry", (req, res) => {
  const {
    paperName,
    paperDate,
    paperMark,
    paperDuration,
    paperIntreuction,
    level,
    QuestionType,
    heading,
    TMark,
    chooseChapter,
    totalQue,
    enterQue,
    restartQue,
    randomSize,
  } = req.body;
  if (
    paperName &&
    paperDate &&
    paperMark &&
    paperDuration &&
    paperIntreuction &&
    level &&
    QuestionType &&
    heading &&
    TMark &&
    chooseChapter &&
    totalQue &&
    enterQue &&
    restartQue &&
    randomSize
  ) {
    res.body("Paper added as " + paperName);
  } else {
    res.send("Error occured");
  }
});
app.get("/getPaperQuestionEntry", (req, res) => {
  const { id, paperName, paperDate, paperDuration, paperMark } = req.body;
  if (id && paperName && paperDate && paperDuration && paperMark) {
    res.send("Question found for " + paperName);
  } else {
    res.send("Not found");
  }
});
app.patch("/updatePaperQuestionEntry", (req, res) => {
  const { paperName, paperDate, paperDuration, paperMark } = req.body;
  if (paperName && paperDate && paperDuration && paperMark) {
    res.send("Entry updated for " + paperName);
  } else {
    res.send("Not found");
  }
});
app.delete("/deletePaperQuestionEntry", (req, res) => {
  const { id } = req.body;
  if (id) {
    res.send(id + " deleted");
  } else {
    res.send("Not found");
  }
});

app.listen(port, () => console.log("listing on port " + port));