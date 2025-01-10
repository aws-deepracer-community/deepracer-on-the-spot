// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { makeCancellable, PromiseCancelledSignal } from '../../internal/utils/promises';
import { extractBucketName, validate } from './validation';
import { useStableCallback } from '@cloudscape-design/component-toolkit/internal';
export function useVersionsFetch(fetchVersions) {
    const [loading, setLoading] = useState(false);
    const [lastFetchedValue, setLastFetched] = useState('');
    const [versions, setVersions] = useState([]);
    const loadVersions = (uri) => {
        if (uri === lastFetchedValue) {
            return;
        }
        setLastFetched(uri);
        const errorCode = validate(uri);
        const [bucketName, prefix] = extractBucketName(uri);
        if (errorCode || !bucketName || !prefix || prefix.slice(-1) === '/') {
            return;
        }
        setLoading(true);
        const result = makeCancellable(fetchVersions(bucketName, prefix));
        result.promise.then(versions => {
            setLoading(false);
            setVersions(versions.map(version => ({
                value: version.VersionId,
                label: version.LastModified,
            })));
        }, err => {
            if (!(err instanceof PromiseCancelledSignal)) {
                setLoading(false);
            }
        });
        return result;
    };
    return {
        loading,
        versions,
        resetVersions: () => setVersions([]),
        // this function is a dependency of useEffect
        loadVersions: useStableCallback(loadVersions),
    };
}
//# sourceMappingURL=use-versions-fetch.js.map