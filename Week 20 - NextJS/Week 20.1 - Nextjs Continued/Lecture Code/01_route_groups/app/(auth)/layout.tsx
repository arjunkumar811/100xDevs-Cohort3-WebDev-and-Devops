
import { Children, ReactNode } from 'react';

export default function RootLayout ({Children}: {
    Children: ReactNode
}) {
    return <div>
        <div>Header</div>
    {Children}
    <div>Footer</div>
    </div>
}