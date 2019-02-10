


curl -H "Authorization: bearer cd1f575cfbc174adc38cfb7e0ce55f1f816b42c7" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" https://api.github.com/graphql