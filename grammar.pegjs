start = Qurio

Qurio =
  q:Question+ {return {questions:q}}

Question =
  NL? type:QuestionType? t:QuestionTitle a:Answer+ NL {
    question = {title: t, answers: a}
    
    if (type) {
      question.type = type;
    }
    else {
      question.type = 'multiplechoice';
    }

    return question
  }

QuestionType 'question type' =
  '[' type:QUESTION_TYPES ']' NL {return type;}

QUESTION_TYPES =
  'multiplechoice'
  / 'checkbox'

QuestionTitle 'a question' =
  WS* NL? title:$(!Bullet .)+ {return title.replace(/\n/g, '<br>');}

Answer 'an answer' = WS* Bullet l1:Line l2:IndentedBlock? o:Option? {
    data = {
      title: (l1 + l2).replace(/\n/g, '<br>')
    }
    if (o) {
      data[o] = true;
    }
    return data
  }

IndentedBlock =
  lines:(!Bullet !Option (NL NL / NL) Indent Line)* {
    data = '';
    for (i = 0; i < lines.length; i++) {
      data += '\n' + lines[i][4];
    }
    return data;
  }

Line =
  l:$(!NL !Option .)+ {return l;}

Option =
  '[correct]' {return 'correct'}

Bullet = NL Indent? '-' WS*

Indent = ('\t' / '    ' / '   ' / '  ' )

WS = ' ' / '\t'

NL =
  '\n'
  / '\r' '\n'?
  / EOF

EOF = !.
