#!/bin/bash
set -xe

export BUILD_ID=abc987
export WORKSPACE=$PWD
export RULES="/Users/brandon.spruth/Applications/Fortify/Fortify_SCA_24.2.0/Core/config/rules/fortify-snow-rules.xml"
export SOURCEANALYZER="/Users/brandon.spruth/Applications/Fortify/Fortify_SCA_24.2.0/bin/sourceanalyzer"

${SOURCEANALYZER} -b ${BUILD_ID} -debug -verbose \
-Dcom.fortify.sca.DisableAnalyzers=controlflow:buffer \
-Dfortify.sca.preprocess.js=true \
-Dcom.fortify.sca.DefaultFileTypes=snjs \
-Dcom.fortify.sca.fileextensions.snjs=TYPESCRIPT \
${WORKSPACE}/**/*.snjs \
${WORKSPACE}/**/*.xml \
${WORKSPACE}/**/*.js

${SOURCEANALYZER} -b ${BUILD_ID} \
-logfile ${BUILD_ID}.txt -verbose -machine-output \
-Dcom.fortify.sca.debug.rule=true \
-Dcom.fortify.sca.DebugVerbose=true \
-scan \
-format fpr -f ${BUILD_ID}.fpr \
-no-default-issue-rules \
-no-default-source-rules \
-no-default-sink-rules \
-rules ${RULES}
