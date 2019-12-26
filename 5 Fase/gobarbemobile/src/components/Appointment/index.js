import React, {useMemo} from 'react';
import {parseISO, formatRelative, subHours} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Avatar, Infor, Name, Time} from './styles';

export default function Appointment({data, onCancel}) {
  const dataParsed = useMemo(() => {
    return formatRelative(subHours(parseISO(data.date), 3), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri:
              data.provider.avatar && __DEV__
                ? data.provider.avatar.url.replace('localhost', '10.0.2.2')
                : `http://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />
        <Infor>
          <Name>{data.provider.name}</Name>
          <Time>{dataParsed}</Time>
        </Infor>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
