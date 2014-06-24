_ = require('underscore')
should = require('should')

grammar = require('../grammar.js')

QUESTION = {
  SINGLE_LINE: 'Is this a single-line question?',
  MULTI_LINE: 'Is this a \n multi-line question?',
  MULTI_PARAGRAPH: 'Is this a \n\n multi-paragraph question?'
}

ANSWER = {
  SINGLE_LINE: "It's a single-line question.",
  MULTI_LINE: "It's a \n  multi-line question.",
  MULTI_PARAGRAPH: "It's a \n\n  multi-paragraph question."
}

test = function (question, answers, done) {
  if (!_.isArray(answers)) {answers = [answers]};
  var str = question;
  answers.forEach(function(a){ str += '\n  - ' + a;})

  try {
    var out = grammar.parse(str);
    out.should.eql(toJSON(question, answers))
    done();
  } catch(e) {
    var err = new Error('Unable to parse string "' + str + '": ' + e.message)
    done(err);
  }
}

toJSON = function (question, answers) {
  var json = {questions: [
    {
      title: question,
      answers: _.map(answers, function(a){
        return {title: a.replace('\n\n  ', '\n').replace('\n  ', '\n')};
      })
    }
  ]}
  return json;
}

describe('Grammar correctly parses', function (done) {

  describe('single line question with', function(done) {

    it('single line answers', function (done) {
      test(QUESTION.SINGLE_LINE, ANSWER.SINGLE_LINE, done);
    })

    it('multi-line answers', function (done) {
      test(QUESTION.SINGLE_LINE, ANSWER.MULTI_LINE, done);
    })

    it('multi-paragraph answers', function (done) {
      test(QUESTION.SINGLE_LINE, ANSWER.MULTI_PARAGRAPH, done);
    })

    it('mixed answers', function (done) {
      test(QUESTION.SINGLE_LINE, _.values(ANSWER), done);
    })

  })

  describe('multi-line question with', function(done) {
    
    it('single line answers', function (done) {
      test(QUESTION.MULTI_LINE, ANSWER.SINGLE_LINE, done);
    })

    it('multi-line answers', function (done) {
      test(QUESTION.MULTI_LINE, ANSWER.MULTI_LINE, done);
    })

    it('multi-paragraph answers', function (done) {
      test(QUESTION.MULTI_LINE, ANSWER.MULTI_PARAGRAPH, done);
    })

    it('mixed answers', function (done) {
      test(QUESTION.MULTI_LINE, _.values(ANSWER), done);
    })

  })

  describe('multi-paragraph question with', function(done) {

    it('single line answers', function (done) {
      test(QUESTION.MULTI_PARAGRAPH, ANSWER.SINGLE_LINE, done);
    })

    it('multi-line answers', function (done) {
      test(QUESTION.MULTI_PARAGRAPH, ANSWER.MULTI_LINE, done);
    })

    it('multi-paragraph answers', function (done) {
      test(QUESTION.MULTI_PARAGRAPH, ANSWER.MULTI_PARAGRAPH, done);
    })

    it('mixed answers', function (done) {
      test(QUESTION.MULTI_PARAGRAPH, _.values(ANSWER), done);
    })
  })

})
