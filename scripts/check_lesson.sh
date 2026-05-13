#!/bin/bash
# check_lesson.sh — run acceptance check on a lesson file
FILE=$1
if [ ! -f "$FILE" ]; then echo "FILE NOT FOUND: $FILE"; exit 1; fi

score=0
issues=""

# A. Knowledge (max 25)
grep -q "【标A:" "$FILE" && ((score+=5)) || issues+="  MISSING 【标A】\n"
grep -qiP "【标[BC]:" "$FILE" && ((score+=5))
if grep -q "📖 小词典" "$FILE"; then
    vocab_count=$(sed -n '/📖 小词典/,/^$/p' "$FILE" | grep -c "|")
    [ "$vocab_count" -ge 2 ] && ((score+=5)) || issues+="  LOW vocab (<2 terms)\n"
else
    issues+="  MISSING 📖小词典\n"
fi
# Check for factual errors (basic check - no "1+1=3")
grep -qiP "1\+1\s*=\s*[^2]" "$FILE" && issues+="  FACTUAL ERROR: 1+1!=2\n" && ((score-=5))

# B. Teaching design (max 25)
grep -q "🧠 想一想" "$FILE" && ((score+=5)) || issues+="  MISSING 🧠想一想\n"
grep -q "❌常见误解" "$FILE" && ((score+=5)) || issues+="  MISSING ❌常见误解\n"
# Check for Steve/Alex dialogue
grep -q "Steve" "$FILE" && ((score+=5)) || issues+="  MISSING Steve dialogue\n"
grep -q "Alex" "$FILE" && ((score+=5)) || issues+="  MISSING Alex dialogue\n"

# C. Exercises (max 15)
ex_count=$(grep -c "练习\|挑战\|闯关\|试试\|练一练\|做一做" "$FILE")
[ "$ex_count" -ge 3 ] && ((score+=5)) || issues+="  FEW exercises (<3)\n"
grep -q "🎯" "$FILE" && ((score+=5)) || issues+="  MISSING 挑战\n"
grep -q "拓展" "$FILE" && ((score+=5)) || true  # bonus for extension link

# D. Presentation (max 15)
img_count=$(grep -c "<img " "$FILE")
if [[ "$FILE" == *"拓展"* ]]; then
    [ "$img_count" -ge 4 ] && ((score+=5)) || issues+="  FEW images (<4)\n"
else
    [ "$img_count" -ge 7 ] && ((score+=5)) || issues+="  FEW images (<7)\n"
fi
# Check format
grep -q "📋 学习目标" "$FILE" && ((score+=5)) || issues+="  MISSING 学习目标\n"

# E. Completeness (max 15)
grep -q "📖 小词典" "$FILE" && ((score+=3))
grep -q "🔗 跨科连接" "$FILE" && ((score+=3)) || issues+="  MISSING 🔗跨科连接\n"
grep -q "🎉" "$FILE" && ((score+=3)) || issues+="  MISSING 🎉庆祝\n"
grep -q "本课小结" "$FILE" && ((score+=3)) || issues+="  MISSING 本课小结\n"
grep -q "学有余力" "$FILE" && ((score+=3)) || true

# F. Language (max 10)
grep -q "Steve：" "$FILE" && ((score+=5))
grep -q "Alex：" "$FILE" && ((score+=5))

# G. AI artifacts (max 5)
if grep -qiP "作为AI|总之|如上所述|希望这些|祝你|in conclusion|to summarize" "$FILE"; then
    issues+="  AI ARTIFACTS detected\n"
    ((score-=10))
else
    ((score+=5))
fi

echo "Score: $score/110 — $FILE"
[ -n "$issues" ] && echo -e "$issues"
[ "$score" -ge 77 ] && echo "PASS" || echo "FAIL"
echo "---"
