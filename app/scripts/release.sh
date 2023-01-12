git pull

declare -a environments=(
    'development'
    'production'
)

print_choose_environment () {
    printf "\x1b[33;1m\n%s\n\x1b[0m" "-----[[ Select Environment ]]-----"
    for environment in ${environments[@]}
    do
        printf "\x1b[33m%s\n\x1b[0m" "$environment"
    done
}

do_release () {
    tag=$1$(date '+%d-%m-%Y--%H-%M-%S')
    git tag $tag
    git push origin --tags
}

print_choose_environment
read eopt

case $eopt in
    development)
        do_release dev-
        ;;
    production)
        do_release
        ;;
    *)
        echo 'no valid option selected'
        ;;
esac