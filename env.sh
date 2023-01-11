
set_env() {

    if ! [[ $# -eq 1 ]]; then
        echo -e "\t> You must provide an envionment and a region"
        echo -e "\t> Usage:\n\t\tset_env <environment>-<region>"
        echo -e "\t> Examples:\n\t\set_env preprod-uk"
        return 1
    fi
    
    BRIT_CONFIG=$(echo $1 | tr '[:lower:]' '[:upper

    # Ensures that BASH_REMATCH works if called in zsh.
    setopt KSH_ARRAYS BASH_REMATCH

    if [[ $BRIT_CONFIG =~ (.*)-(.*) ]]; then
        export ENVIRONMENT=${BASH_REMATCH[1]}
        export REGION=${BASH_REMATCH[2]}
    fi

    unsetopt KSH_ARRAYS BASH_REMATCH

    export CYPRESS_ENVIRONMENT=$(eval "echo $ENVIRONMENT")
    export CYPRESS_REGION=$(eval "echo $REGION")
    export CYPRESS_VIEWPORT=$(eval "echo $VIEWPORT")     
}
