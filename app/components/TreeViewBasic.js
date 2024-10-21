import React from 'react';
import { GroupBox, TreeView } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 1rem;

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
    ul {
      list-style-type: none; /* Elimina los puntos o números de la lista */
      
    }
`;

const Panel = styled.div`
  padding: 2rem;
`;

const categories = [
  {
    id: 'videojuego',
    label: 'Videojuego',
    icon: <>🎮</>,
    items: [
      {
        id: 'action-games',
        label: 'Un juego metroidvania en',
        icon: <>⚔️</>
      },
      {
        id: 'action-games2',
        label: 'el que la progresión se da'
      },
      {
        id: 'action-games3',
        label: 'cumpliendo retos'
      }
    ]
  },
  {
    id: 'internet',
    label: 'Internet de las cosas',
    icon: <>🏡</>,
    items: [
      {
        id: 'lighting',
        label: 'Dar interfaz en Internet',
        icon: <>💡</>
      },
      {
        id: 'lighting2',
        label: 'a un repetidor de señal,'
      },
      {
        id: 'lighting2',
        label: 'infrarrojo, Bluetooth, Wi-Fi'
      }
    ]
  }
];



const allIds= [];

function getIds(item) {
  allIds.push(item.id);

  item.items?.forEach(getIds);
}

categories.forEach(getIds);

export default function Basic() {
  return (
    <div style={{ maxWidth: '250px' }}>
      <Wrapper>
        <GroupBox label='Proyectos Pendientes'>
          <TreeView tree={categories} />
        </GroupBox>
      </Wrapper>
    </div>
  );
}
