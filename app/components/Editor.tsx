'use client'
import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import '@blueprintjs/core/lib/css/blueprint.css';

import { createStore } from 'polotno/model/store';

const store: any = createStore({
    key: 'nFA5H9elEytDyPyvKL7T',
    showCredit: true,
  });
const page = store.addPage();
export default function Editor() {
    const handleClick = () => {
        // const json = store.saveJSON();
        console.log('json ', store);
    }

    //@ts-ignore
    store.onEvent((ElementChange: any), (event) => {
        // Handle element change event here
        console.log('Element changed:', event.element);
      });
    
    //@ts-ignore
    store.onEvent(SelectionChange, (event) => {
      // Handle selection change event here
      console.log('Selection changed:', event.selectedElements);
    });

    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} downloadButtonEnabled />
                <Workspace store={store} />
                <ZoomButtons store={store} />
                <PagesTimeline store={store} />
                <button onClick={handleClick}  style={{ position: 'absolute', top: 60, right: 5, zIndex: 1000 }}>
                    Save Design
                </button>
            </WorkspaceWrap>
        </PolotnoContainer>
    )}