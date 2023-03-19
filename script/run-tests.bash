read -p "should this test pass? [N/y]: $resp

if ! [[ "${resp}" =~ ^[yY] ]]; then
    exit 0
fi