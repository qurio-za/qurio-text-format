start = Qurio

Qurio =
  q:Question* {return {questions:q}}

Question =
  t:QuestionTitle a:Answer+ NL {return {title: t, answers: a}}

QuestionTitle 'a question' = WS* NL? title:$(!Bullet .)+ {return title;}

Answer 'an answer' = WS* Bullet l1:Line l2:IndentedBlock? o:Option? {
    data = {title: l1 + l2};
    if (o) {
      data[o] = true;
    }
    return data;
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
