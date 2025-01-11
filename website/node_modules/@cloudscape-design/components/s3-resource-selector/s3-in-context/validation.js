// https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
const SCHEME = 's3://';
const BUCKET_FIRST_CHAR = /^[a-z0-9]{1}/;
const CAPITAL_LETTER = /[A-Z]/;
const DNS_NAME = /^(([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/;
function checkBucketNameLength(bucketName) {
    return 3 <= bucketName.length && bucketName.length <= 63;
}
export function extractBucketName(uri) {
    const [bucketName, ...rest] = uri.replace(SCHEME, '').split('/');
    return [bucketName, rest.join('/')];
}
export function validate(uri) {
    if (uri === '') {
        return undefined;
    }
    if (uri.slice(0, SCHEME.length) !== SCHEME) {
        return 'validationPathMustBegin';
    }
    const [bucketName] = extractBucketName(uri);
    if (!BUCKET_FIRST_CHAR.test(bucketName)) {
        return 'validationBucketLowerCase';
    }
    if (CAPITAL_LETTER.test(bucketName)) {
        return 'validationBucketMustNotContain';
    }
    if (!checkBucketNameLength(bucketName)) {
        return 'validationBucketLength';
    }
    if (!DNS_NAME.test(bucketName)) {
        return 'validationBucketMustComplyDns';
    }
    return undefined;
}
export function getErrorText(i18n, i18nStrings, errorCode) {
    return errorCode ? i18n(`i18nStrings.${errorCode}`, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings[errorCode]) : undefined;
}
//# sourceMappingURL=validation.js.map